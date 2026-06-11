import { useState, useEffect, useMemo } from 'react'
import { detectUserLanguage, LANGUAGES, CATEGORIES, LOCATIONS, SAMPLE_LISTINGS } from './data'
import './App.css'

function App() {
  const [userLang, setUserLang] = useState(() => detectUserLanguage())
  const [selectedLang, setSelectedLang] = useState(userLang)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [showLangMatch, setShowLangMatch] = useState(true)
  const [selectedListing, setSelectedListing] = useState(null)
  const [showPostForm, setShowPostForm] = useState(false)
  const [listings, setListings] = useState(SAMPLE_LISTINGS)
  const [newPost, setNewPost] = useState({
    title: '', description: '', price: '', category: 'housing',
    location: '', languages: [userLang, 'en'], contact: '',
  })

  // Re-detect when language changes
  useEffect(() => {
    if (showLangMatch) {
      setSelectedLang(userLang)
    }
  }, [userLang, showLangMatch])

  const filteredListings = useMemo(() => {
    let result = listings

    // Category filter
    if (selectedCategory) {
      result = result.filter(l => l.category === selectedCategory)
    }

    // Location filter
    if (selectedLocation) {
      result = result.filter(l => l.location === selectedLocation)
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
      )
    }

    // Language match sort: if enabled, prioritize listings that support user's language
    if (showLangMatch && selectedLang) {
      result = [...result].sort((a, b) => {
        const aMatch = a.languages.includes(selectedLang) ? 0 : 1
        const bMatch = b.languages.includes(selectedLang) ? 0 : 1
        if (aMatch !== bMatch) return aMatch - bMatch
        // Featured first within same language group
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    } else {
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [listings, selectedCategory, selectedLocation, searchQuery, showLangMatch, selectedLang])

  const langMatchCount = useMemo(() => {
    if (!showLangMatch || !selectedLang) return 0
    return listings.filter(l => l.languages.includes(selectedLang)).length
  }, [listings, showLangMatch, selectedLang])

  const handlePostSubmit = (e) => {
    e.preventDefault()
    const listing = {
      ...newPost,
      id: Date.now(),
      posted: new Date().toISOString().slice(0, 10),
      featured: false,
    }
    setListings(prev => [listing, ...prev])
    setShowPostForm(false)
    setNewPost({
      title: '', description: '', price: '', category: 'housing',
      location: '', languages: [userLang, 'en'], contact: '',
    })
  }

  const handleLangCheckbox = (code, checked) => {
    setNewPost(prev => ({
      ...prev,
      languages: checked
        ? [...prev.languages, code]
        : prev.languages.filter(l => l !== code)
    }))
  }

  const getCategoryName = (cat) => {
    const c = CATEGORIES.find(c => c.id === cat)
    return c ? `${c.icon} ${c.name}` : cat
  }

  const getLangName = (code) => {
    const l = LANGUAGES[code]
    return l ? `${l.flag} ${l.name}` : code
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a className="logo" onClick={() => { setSelectedCategory(null); setSearchQuery('') }}>
            <span className="logo-icon">📋</span>
            Classifieds
            <span className="lang-badge">
              {LANGUAGES[userLang]?.flag} {LANGUAGES[userLang]?.name}
            </span>
          </a>

          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search listings... / 搜索广告..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <select
              className="lang-select"
              value={userLang}
              onChange={e => setUserLang(e.target.value)}
            >
              {Object.values(LANGUAGES).map(l => (
                <option key={l.code} value={l.code}>{l.flag} {l.name}</option>
              ))}
            </select>
            <button className="btn-post" onClick={() => setShowPostForm(true)}>
              ➕ Post Ad
            </button>
          </div>
        </div>
      </header>

      {/* Language match banner */}
      {showLangMatch && selectedLang && selectedLang !== 'en' && (
        <div className="lang-banner">
          🌐 Detected your language: <strong>{LANGUAGES[selectedLang]?.flag} {LANGUAGES[selectedLang]?.name}</strong>
          — Showing <strong>{langMatchCount}</strong> listings with {LANGUAGES[selectedLang]?.name} service first!
          {' '}<span style={{cursor:'pointer',textDecoration:'underline'}} onClick={() => setShowLangMatch(false)}>Show all</span>
        </div>
      )}

      <main className="main">
        {/* Categories */}
        <div className="categories">
          <button
            className={`cat-btn ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            🌍 All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="filters">
          <select
            className="filter-select"
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
          >
            <option value="">📍 All Locations</option>
            {LOCATIONS.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={showLangMatch}
              onChange={e => setShowLangMatch(e.target.checked)}
            />
            🌐 Language Match Priority
          </label>
        </div>

        {/* Results info */}
        <div className="results-info">
          {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''}
          {selectedCategory && ` in ${getCategoryName(selectedCategory)}`}
          {selectedLocation && ` near ${selectedLocation}`}
          {showLangMatch && selectedLang !== 'en' && ` — ${LANGUAGES[selectedLang]?.name} speakers shown first`}
        </div>

        {/* Post form */}
        {showPostForm && (
          <form className="post-form" onSubmit={handlePostSubmit}>
            <h3>📝 Post a New Listing</h3>
            <div className="form-group">
              <label>Title</label>
              <input
                required
                value={newPost.title}
                onChange={e => setNewPost(p => ({...p, title: e.target.value}))}
                placeholder="e.g. 房屋出租 / House for Rent"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                required
                value={newPost.description}
                onChange={e => setNewPost(p => ({...p, description: e.target.value}))}
                placeholder="Describe your listing in any language..."
              />
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <div className="form-group" style={{flex:1,minWidth:150}}>
                <label>Price</label>
                <input
                  value={newPost.price}
                  onChange={e => setNewPost(p => ({...p, price: e.target.value}))}
                  placeholder="e.g. $1,500/month"
                />
              </div>
              <div className="form-group" style={{flex:1,minWidth:150}}>
                <label>Category</label>
                <select value={newPost.category} onChange={e => setNewPost(p => ({...p, category: e.target.value}))}>
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
                </select>
              </div>
              <div className="form-group" style={{flex:1,minWidth:150}}>
                <label>Location</label>
                <select value={newPost.location} onChange={e => setNewPost(p => ({...p, location: e.target.value}))}>
                  <option value="">Select...</option>
                  {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                value={newPost.contact}
                onChange={e => setNewPost(p => ({...p, contact: e.target.value}))}
                placeholder="Phone or email"
              />
            </div>
            <div className="form-group">
              <label>Service Languages</label>
              <div className="lang-checkboxes">
                {Object.values(LANGUAGES).map(l => (
                  <label key={l.code} className="lang-checkbox">
                    <input
                      type="checkbox"
                      checked={newPost.languages.includes(l.code)}
                      onChange={e => handleLangCheckbox(l.code, e.target.checked)}
                    />
                    {l.flag} {l.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-submit">Publish Listing</button>
              <button type="button" className="btn-cancel" onClick={() => setShowPostForm(false)}>Cancel</button>
            </div>
          </form>
        )}

        {/* Listings */}
        {filteredListings.length === 0 ? (
          <div className="empty-state">
            <div className="emoji">🔍</div>
            <h3>No listings found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="listings-grid">
            {filteredListings.map(listing => (
              <div
                key={listing.id}
                className={`listing-card ${listing.featured ? 'featured' : ''}`}
                onClick={() => setSelectedListing(listing)}
              >
                {listing.featured && <div className="featured-badge">Featured</div>}
                <div className="listing-category">{getCategoryName(listing.category)}</div>
                <div className="listing-title">{listing.title}</div>
                <div className="listing-desc">{listing.description}</div>
                <div className="listing-meta">
                  <span className="listing-price">{listing.price}</span>
                  <span className="listing-location">📍 {listing.location}</span>
                </div>
                <div className="listing-langs">
                  {listing.languages.map(code => (
                    <span
                      key={code}
                      className={`lang-tag ${showLangMatch && code === selectedLang ? 'matched' : ''}`}
                    >
                      {LANGUAGES[code]?.flag} {LANGUAGES[code]?.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Detail modal */}
      {selectedListing && (
        <div className="modal-overlay" onClick={() => setSelectedListing(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedListing(null)}>✕</button>
            <div className="detail-category">{getCategoryName(selectedListing.category)}</div>
            <h2>{selectedListing.title}</h2>
            <div className="detail-price">{selectedListing.price}</div>
            <div className="detail-desc">{selectedListing.description}</div>
            <div className="detail-row">📍 <span>Location:</span> {selectedListing.location}</div>
            <div className="detail-row">📅 <span>Posted:</span> {selectedListing.posted}</div>
            <div className="detail-row">📞 <span>Contact:</span>{' '}
              {selectedListing.link ? (
                <a href={selectedListing.link} target="_blank" rel="noopener noreferrer" style={{color:'#4fc3f7',textDecoration:'underline'}}>View Original Listing ↗</a>
              ) : (
                <span>{selectedListing.contact}</span>
              )}
            </div>
            <div className="detail-row">🌐 <span>Languages:</span>{' '}
              {selectedListing.languages.map(code => (
                <span key={code} className={`lang-tag ${showLangMatch && code === selectedLang ? 'matched' : ''}`}>
                  {LANGUAGES[code]?.flag} {LANGUAGES[code]?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>📋 Classifieds — North America Multi-Ethnic Classified Ads</p>
        <p>Connecting communities through language 🌐</p>
        <p style={{fontSize:'13px',marginTop:'8px'}}>
          <a href="/about.html" style={{color:'#4fc3f7',textDecoration:'none'}}>About Classifieds</a> · 
          <a href="https://github.com/rbs31/Classifieds" style={{color:'#4fc3f7',textDecoration:'none'}}>GitHub</a>
        </p>
      </footer>
    </div>
  )
}

export default App
