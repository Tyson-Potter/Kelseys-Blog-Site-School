const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Paste your HTML content here
let htmlContent = `<!doctype html>
<html 
      lang="en"
      dir="ltr">
  <head>
    <meta name="google-signin-client-id" content="721724668570-nbkv1cfusk7kk4eni4pjvepaus73b13t.apps.googleusercontent.com">
    <meta name="google-signin-scope"
          content="profile email https://www.googleapis.com/auth/developerprofiles https://www.googleapis.com/auth/developerprofiles.award">
    <meta property="og:site_name" content="Firebase">
    <meta property="og:type" content="website"><meta name="theme-color" content="#039be5"><meta charset="utf-8">
    <meta content="IE=Edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    

    <link rel="manifest" href="/_pwa/firebase/manifest.json"
          crossorigin="use-credentials">
    <link rel="preconnect" href="//www.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="//apis.google.com" crossorigin>
    <link rel="preconnect" href="//www.google-analytics.com" crossorigin><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700&display=swap">
      <link rel="stylesheet"
            href="//fonts.googleapis.com/css2?family=Material+Icons&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"><link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/css/app.css">
      <link rel="shortcut icon" href="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/favicon.png">
    <link rel="apple-touch-icon" href="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/touchicon-180.png"><link rel="canonical" href="https://firebase.google.com/support/release-notes/admin/node"><link rel="search" type="application/opensearchdescription+xml"
            title="Firebase" href="https://firebase.google.com/s/opensearch.xml">
      <link rel="alternate" hreflang="en"
          href="https://firebase.google.com/support/release-notes/admin/node" /><link rel="alternate" hreflang="x-default" href="https://firebase.google.com/support/release-notes/admin/node" /><title>Firebase Admin Node.js SDK Release Notes</title>

<meta property="og:title" content="Firebase Admin Node.js SDK Release Notes"><meta property="og:url" content="https://firebase.google.com/support/release-notes/admin/node"><meta property="og:locale" content="en"><script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    
    "headline": "Firebase Admin Node.js SDK Release Notes"
  }
</script>
  <meta name="xsrf_token" content="bsdyyVQ5Yi7WwagRrurgoM0QfT8qt5beYxQvxMe24Sw6MTY5MDU4MzY0MTQ0MTEwNQ">
  

  <meta name="session_expiry" content="0">
  
    
    
    
    
    
    
    
    
<meta name="gtm_var" data-key="docType" data-value="changelog">



  

    
      <link rel="stylesheet" href="/extras.css"></head>
  <body class="firebase-support-release-page"
        template="page"
        theme="firebase-theme"
        type="article"
        
        
        
        layout="docs"
        
        
        
        
        pending>
    <devsite-progress type="indeterminate" id="app-progress"></devsite-progress>
  
    <section class="devsite-wrapper"><devsite-header>
  
    























<div class="devsite-header--inner nocontent">
  <div class="devsite-top-logo-row-wrapper-wrapper">
    <div class="devsite-top-logo-row-wrapper">
      <div class="devsite-top-logo-row">
        <button type="button" id="devsite-hamburger-menu"
          class="devsite-header-icon-button button-flat material-icons gc-analytics-event"
          data-category="Site-Wide Custom Events"
          data-label="Navigation menu button"
          visually-hidden
          aria-label="Open menu">
        </button>
        <div class="devsite-product-name-wrapper">

  <a href="/" class="devsite-site-logo-link gc-analytics-event"
   data-category="Site-Wide Custom Events" data-label="Site logo" track-type="globalNav"
   track-name="firebase" track-metadata-position="nav"
   track-metadata-eventDetail="nav">

  
    <img src="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/lockup.svg" class="devsite-site-logo" alt="Firebase">
  

</a>



  
  
  <span class="devsite-product-name">
    <ul class="devsite-breadcrumb-list"
  >
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
      
    
  </li>
  
</ul>
  </span>

</div>
        <div class="devsite-top-logo-row-middle">
          <div class="devsite-header-upper-tabs">
            
              
              
  <devsite-tabs class="upper-tabs">

    <nav class="devsite-tabs-wrapper" aria-label="Upper tabs">
      
        
          <tab dropdown
    
    
    
    >
  
    <a href="https://firebase.google.com/products-build"
      track-metadata-eventdetail="https://firebase.google.com/products-build"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - products"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Products"
         
           track-name="products"
         
       >
    Products
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for Products"
       track-type="nav"
       track-metadata-eventdetail="https://firebase.google.com/products-build"
       track-metadata-position="nav - products"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: Products"
        
          track-name="products"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/products-build"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/products-build"
                     track-metadata-position="nav - products"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Build
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/products-release"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/products-release"
                     track-metadata-position="nav - products"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Release & Monitor
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/products-engage"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/products-engage"
                     track-metadata-position="nav - products"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Engage
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab dropdown
    
    
    
    >
  
    <a href="https://firebase.google.com/solutions"
      track-metadata-eventdetail="https://firebase.google.com/solutions"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - solutions"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Solutions"
         
           track-name="solutions"
         
       >
    Solutions
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for Solutions"
       track-type="nav"
       track-metadata-eventdetail="https://firebase.google.com/solutions"
       track-metadata-position="nav - solutions"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: Solutions"
        
          track-name="solutions"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/solutions/portal"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/solutions/portal"
                     track-metadata-position="nav - solutions"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Explore all solutions
                    </div>
                    
                    <div class="devsite-nav-item-description">
                      Discover solutions for use cases in your apps and businesses

                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab  >
            
    <a href="https://firebase.google.com/pricing"
      track-metadata-eventdetail="https://firebase.google.com/pricing"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - pricing"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Pricing"
         
           track-name="pricing"
         
       >
    Pricing
  
    </a>
  
  
          </tab>
        
      
        
          <tab dropdown
    
    
    
    >
  
    <a href="https://firebase.google.com/docs"
      track-metadata-eventdetail="https://firebase.google.com/docs"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - docs"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Docs"
         
           track-name="docs"
         
       >
    Docs
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for Docs"
       track-type="nav"
       track-metadata-eventdetail="https://firebase.google.com/docs"
       track-metadata-position="nav - docs"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: Docs"
        
          track-name="docs"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Overview
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/guides"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/guides"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Fundamentals
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/build"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/build"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Build
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/release"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/release"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Release & Monitor
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/engage"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/engage"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Engage
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/reference"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/reference"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Reference
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/docs/samples"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/docs/samples"
                     track-metadata-position="nav - docs"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Samples
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab dropdown
    
    
    
    >
  
    <a href="https://firebase.google.com/community"
      track-metadata-eventdetail="https://firebase.google.com/community"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - community"
       track-metadata-module="primary nav"
       
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Community"
         
           track-name="community"
         
       >
    Community
  
    </a>
  
  
    <a href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
       aria-label="Dropdown menu for Community"
       track-type="nav"
       track-metadata-eventdetail="https://firebase.google.com/community"
       track-metadata-position="nav - community"
       track-metadata-module="primary nav"
       
        
          data-category="Site-Wide Custom Events"
        
          data-label="Tab: Community"
        
          track-name="community"
        
      
       class="devsite-tabs-dropdown-toggle devsite-icon devsite-icon-arrow-drop-down"></a>
  
  <div class="devsite-tabs-dropdown" aria-label="submenu" hidden>
    
    <div class="devsite-tabs-dropdown-content">
      
        <div class="devsite-tabs-dropdown-column
                    ">
          
            <ul class="devsite-tabs-dropdown-section
                       ">
              
              
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/community/learn"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/community/learn"
                     track-metadata-position="nav - community"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Learn
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/community/events"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/community/events"
                     track-metadata-position="nav - community"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Events
                    </div>
                    
                  </a>
                </li>
              
                <li class="devsite-nav-item">
                  <a href="https://firebase.google.com/community/stories"
                     track-type="nav"
                     track-metadata-eventdetail="https://firebase.google.com/community/stories"
                     track-metadata-position="nav - community"
                     track-metadata-module="tertiary nav"
                     
                     tooltip
                  >
                    
                    <div class="devsite-nav-item-title">
                      Stories
                    </div>
                    
                  </a>
                </li>
              
            </ul>
          
        </div>
      
    </div>
  </div>
</tab>
        
      
        
          <tab  active>
            
    <a href="https://firebase.google.com/support"
      track-metadata-eventdetail="https://firebase.google.com/support"
    
       class="devsite-tabs-content gc-analytics-event "
       track-type="nav"
       track-metadata-position="nav - support"
       track-metadata-module="primary nav"
       aria-label="Support, selected" 
       
         
           data-category="Site-Wide Custom Events"
         
           data-label="Tab: Support"
         
           track-name="support"
         
       >
    Support
  
    </a>
  
  
          </tab>
        
      
    </nav>

  </devsite-tabs>

            
           </div>
          
<devsite-search
    aria-expanded="false"
    aria-haspopup="listbox"
    enable-signin
    enable-search
    enable-suggestions
      enable-query-completion
    
    project-name="Firebase"
    tenant-name="Firebase"
    
    
    
    
    
    
    role="combobox">
  <form class="devsite-search-form" action="https://firebase.google.com/s/results" method="GET">
    <div class="devsite-search-container">
      <div class="devsite-searchbox">
        <input
          aria-activedescendant=""
          aria-autocomplete="list"
          
          aria-label="Search"
          aria-haspopup="false"
          aria-multiline="false"
          aria-label="Search box"
          autocomplete="off"
          class="devsite-search-field devsite-search-query"
          name="q"
          
          placeholder="Search"
          role="searchbox"
          type="text"
          value=""
          >
        <div class="devsite-search-image material-icons" aria-hidden="true"></div>
      </div>
      <button type="button"
              search-open
              class="devsite-search-button devsite-header-icon-button button-flat material-icons"
              
              aria-label="Open search"></button>
    </div>
  </form>
  <button type="button"
          search-close
          class="devsite-search-button devsite-header-icon-button button-flat material-icons"
          
          aria-label="Close search"></button>
</devsite-search>

        </div>

        

        

        

        
<devsite-language-selector>
  <ul role="presentation">
    
    
    <li role="presentation">
      <a role="menuitem" lang="en"
        
          aria-current="true">English</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="id"
        >Bahasa Indonesia</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es_419"
        >Español – América Latina</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pt_br"
        >Português – Brasil</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_cn"
        >中文 – 简体</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ja"
        >日本語</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ko"
        >한국어</a>
    </li>
    
  </ul>
</devsite-language-selector>


        
          
  <a class="devsite-header-link devsite-top-button button gc-analytics-event"
     href="//console.firebase.google.com"
     data-category="Site-Wide Custom Events"
     data-label="Site header link"
     >
    Go to console
  </a>
  
        

        
          
          
          <devsite-user signed-in
                        
                        
                          enable-profiles
                        
                        
                          fp-auth
                        
                        id="devsite-user">
            
        </devsite-user>
           
        
      </div>
    </div>
  </div>



  <div class="devsite-collapsible-section
    
      devsite-header-no-lower-tabs
    ">
    <div class="devsite-header-background">
      
        
          <div class="devsite-product-id-row"
           >
            <div class="devsite-product-description-row">
              
                
                  
                  
                  <ul class="devsite-breadcrumb-list"
  >
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
  <a href="https://firebase.google.com/support"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Lower Header"
      
        data-value="1"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="1"
      
        track-metadata-eventdetail=""
      
    >
    
        Support
      
  </a>
  
    
  </li>
  
</ul>
                
              
              
            </div>
            
          </div>
          
        
      
      
    </div>
  </div>

</div>



  

  
</devsite-header>
      <devsite-book-nav scrollbars >
        
          





















<div class="devsite-book-nav-filter
            ">
  <input type="text"
         placeholder="Filter"
         
         aria-label="Type to filter"
         role="searchbox">
  
  <span class="filter-clear-button hidden"
        data-title="Clear filter"
        aria-label="Clear filter"
        role="button"
        tabindex="0"></span>
</div>

<nav class="devsite-book-nav devsite-nav nocontent"
     aria-label="Side menu">
  <div class="devsite-mobile-header">
    <button type="button"
            id="devsite-close-nav"
            class="devsite-header-icon-button button-flat material-icons gc-analytics-event"
            data-category="Site-Wide Custom Events"
            data-label="Close navigation"
            aria-label="Close navigation">
    </button>
    <div class="devsite-product-name-wrapper">

  <a href="/" class="devsite-site-logo-link gc-analytics-event"
   data-category="Site-Wide Custom Events" data-label="Site logo" track-type="globalNav"
   track-name="firebase" track-metadata-position="nav"
   track-metadata-eventDetail="nav">

  
    <img src="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/lockup.svg" class="devsite-site-logo" alt="Firebase">
  

</a>


  
      <span class="devsite-product-name">
        
        
        <ul class="devsite-breadcrumb-list"
  >
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
      
    
  </li>
  
</ul>
      </span>
    

</div>
  </div>

  <div class="devsite-book-nav-wrapper">
    <div class="devsite-mobile-nav-top">
      
        <ul class="devsite-nav-list">
          
            <li class="devsite-nav-item">
              
  
  <a href="/products-build"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Products"
      
        track-name="products"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Products"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Products
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Products"
      
        track-name="products"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="Products">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="Products">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/solutions"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Solutions"
      
        track-name="solutions"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Solutions"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Solutions
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Solutions"
      
        track-name="solutions"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="Solutions">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="Solutions">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/pricing"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Pricing"
      
        track-name="pricing"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Pricing"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Pricing
   </span>
    
  
  </a>
  

  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/docs"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Docs"
      
        track-name="docs"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Docs"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Docs
   </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Docs"
      
        track-name="docs"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="Docs">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="Docs">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/community"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              "
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Community"
      
        track-name="community"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Community"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Community
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
    <ul class="devsite-nav-responsive-tabs devsite-nav-has-menu
               ">
      
<li class="devsite-nav-item">

  
  <span
    
       class="devsite-nav-title"
       tooltip
    
    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Community"
      
        track-name="community"
      
    >
  
    <span class="devsite-nav-text" tooltip menu="Community">
      More
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          menu="Community">
    </span>
    
  
  </span>
  

</li>

    </ul>
  
              
            </li>
          
            <li class="devsite-nav-item">
              
  
  <a href="/support"
    
       class="devsite-nav-title gc-analytics-event
              devsite-nav-has-children
              devsite-nav-active"
    

    
      
        data-category="Site-Wide Custom Events"
      
        data-label="Tab: Support"
      
        track-name="support"
      
    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Support"
     track-type="globalNav"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Support
   </span>
    
    <span class="devsite-nav-icon material-icons" data-icon="forward"
          >
    </span>
    
  
  </a>
  

  
              
            </li>
          
          
    
<li class="devsite-nav-item">

  
  <a href="//console.firebase.google.com"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Go to console"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Go to console
   </span>
    
  
  </a>
  

</li>

  
          
        </ul>
      
    </div>
    
      <div class="devsite-mobile-nav-bottom" role="navigation">
        
          
          <ul class="devsite-nav-list" menu="_book">
            <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Developer Support</span>
      </div></li>

  <li class="devsite-nav-item"><a href="/support"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support"
      ><span class="devsite-nav-text" tooltip>Contact Support</span></a></li>

  <li class="devsite-nav-item"><a href="/support/scope"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/scope"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/scope"
      ><span class="devsite-nav-text" tooltip>Scope of no-cost support</span></a></li>

  <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Support Guides</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/support/guides"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides"
      ><span class="devsite-nav-text" tooltip>Overview</span></a></li><li class="devsite-nav-item"><a href="/support/faq"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/faq"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/faq"
      ><span class="devsite-nav-text" tooltip>FAQ</span></a></li><li class="devsite-nav-item"><a href="/support/guides/security-checklist"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/security-checklist"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/security-checklist"
      ><span class="devsite-nav-text" tooltip>Security checklist</span></a></li><li class="devsite-nav-item"><a href="/support/guides/launch-checklist"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/launch-checklist"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/launch-checklist"
      ><span class="devsite-nav-text" tooltip>Launch checklist</span></a></li><li class="devsite-nav-item"><a href="/support/guides/service-accounts"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/service-accounts"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/service-accounts"
      ><span class="devsite-nav-text" tooltip>Firebase service accounts</span></a></li><li class="devsite-nav-item"><a href="/support/guides/analytics-adsupport"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/analytics-adsupport"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/analytics-adsupport"
      ><span class="devsite-nav-text" tooltip>Enable the AdSupport framework</span></a></li><li class="devsite-nav-item"><a href="/support/dynamic-links-faq"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/dynamic-links-faq"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/dynamic-links-faq"
      ><span class="devsite-nav-text" tooltip>Dynamic Links Deprecation FAQ</span></a></li><li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Migrate from Parse</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/support/guides/parse-android"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/parse-android"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/parse-android"
      ><span class="devsite-nav-text" tooltip>Android</span></a></li><li class="devsite-nav-item"><a href="/support/guides/parse-ios"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/parse-ios"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/parse-ios"
      ><span class="devsite-nav-text" tooltip>iOS+</span></a></li></ul></li></ul></li>

  <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Cloud Audit Logs</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-management"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-management"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-management"
      ><span class="devsite-nav-text" tooltip>Firebase Management</span></a></li><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-storage"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-storage"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-storage"
      ><span class="devsite-nav-text" tooltip>Cloud Storage for Firebase</span></a></li><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-cloud-messaging"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-cloud-messaging"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-cloud-messaging"
      ><span class="devsite-nav-text" tooltip>Firebase Cloud Messaging</span></a></li><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-app-check"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-app-check"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-app-check"
      ><span class="devsite-nav-text" tooltip>Firebase App Check</span></a></li><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-rules"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-rules"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-rules"
      ><span class="devsite-nav-text" tooltip>Firebase Security Rules</span></a></li><li class="devsite-nav-item"><a href="/support/guides/cloud-audit-logging/firebase-realtime-database"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/guides/cloud-audit-logging/firebase-realtime-database"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/guides/cloud-audit-logging/firebase-realtime-database"
      ><span class="devsite-nav-text" tooltip>Firebase Realtime Database</span></a></li></ul></li>

  <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Recent Changes and Updates</span>
      </div></li>

  <li class="devsite-nav-item"><a href="/support/releases"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/releases"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/releases"
      ><span class="devsite-nav-text" tooltip>Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/ios"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/ios"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/ios"
      ><span class="devsite-nav-text" tooltip>iOS Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/android"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/android"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/android"
      ><span class="devsite-nav-text" tooltip>Android Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/js"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/js"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/js"
      ><span class="devsite-nav-text" tooltip>JavaScript Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/cpp-relnotes"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/cpp-relnotes"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/cpp-relnotes"
      ><span class="devsite-nav-text" tooltip>C++ Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/unity"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/unity"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/unity"
      ><span class="devsite-nav-text" tooltip>Unity Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/admin/node"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/admin/node"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/admin/node"
      ><span class="devsite-nav-text" tooltip>Admin Node.js Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/admin/java"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/admin/java"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/admin/java"
      ><span class="devsite-nav-text" tooltip>Admin Java Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/admin/python"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/admin/python"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/admin/python"
      ><span class="devsite-nav-text" tooltip>Admin Python Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/admin/go"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/admin/go"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/admin/go"
      ><span class="devsite-nav-text" tooltip>Admin Go Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/admin/dotnet"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/admin/dotnet"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/admin/dotnet"
      ><span class="devsite-nav-text" tooltip>Admin .NET Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/security-rules"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/security-rules"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/security-rules"
      ><span class="devsite-nav-text" tooltip>Security Rules Release Notes</span></a></li>

  <li class="devsite-nav-item"><a href="/support/release-notes/cli"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/release-notes/cli"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/release-notes/cli"
      ><span class="devsite-nav-text" tooltip>Firebase CLI Release Notes</span></a></li>

  <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Legal Information</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/terms"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms"
      ><span class="devsite-nav-text" tooltip>Terms of Service</span></a></li><li class="devsite-nav-item"><a href="/terms/billing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/billing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/billing"
      ><span class="devsite-nav-text" tooltip>Paid Services Terms</span></a></li><li class="devsite-nav-item"><a href="/terms/data-processing-terms"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/data-processing-terms"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/data-processing-terms"
      
        alt-paths=" /terms/usa-privacy-addendum "><span class="devsite-nav-text" tooltip>Data Processing and Security Terms</span></a></li><li class="devsite-nav-item"><a href="/terms/firebase-sccs"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/firebase-sccs"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/firebase-sccs"
      
        alt-paths=" /terms/firebase-sccs-uk-c2p /terms/firebase-sccs-eu-p2p /terms/firebase-sccs-eu-p2c /terms/firebase-sccs-eu-c2p /terms/firebase-sccs-eu-p2p-google-exporter /terms/crashlytics-sccs-uk-c2p /terms/crashlytics-sccs-eu-p2p /terms/crashlytics-sccs-eu-p2c /terms/crashlytics-sccs-eu-c2p /terms/crashlytics-sccs-eu-p2p-google-exporter /terms/crashlytics-app-distribution-mcc "><span class="devsite-nav-text" tooltip>Firebase: Standard Contractual Clauses</span></a></li><li class="devsite-nav-item"><a href="/terms/service-level-agreement"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/service-level-agreement"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/service-level-agreement"
      ><span class="devsite-nav-text" tooltip>Service Level Agreement for Hosting and Realtime Database</span></a></li><li class="devsite-nav-item"><a href="/terms/service-level-agreement/cloud-storage"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/service-level-agreement/cloud-storage"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/service-level-agreement/cloud-storage"
      ><span class="devsite-nav-text" tooltip>Cloud Storage for Firebase Service Level Agreement</span></a></li><li class="devsite-nav-item"><a href="/policies/app-indexing"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /policies/app-indexing"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/policies/app-indexing"
      ><span class="devsite-nav-text" tooltip>Firebase App Indexing User Data Policy</span></a></li><li class="devsite-nav-item"><a href="/terms/crashlytics"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/crashlytics"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/crashlytics"
      ><span class="devsite-nav-text" tooltip>Crashlytics and App Distribution Terms</span></a></li><li class="devsite-nav-item"><a href="/terms/subprocessors"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /terms/subprocessors"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/terms/subprocessors"
      ><span class="devsite-nav-text" tooltip>Firebase Subprocessors</span></a></li></ul></li>

  <li class="devsite-nav-item
           devsite-nav-heading"><div class="devsite-nav-title devsite-nav-title-no-path">
        <span class="devsite-nav-text" tooltip>Privacy and Security Information</span>
      </div><ul class="devsite-nav-section"><li class="devsite-nav-item"><a href="/support/privacy"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy"
      ><span class="devsite-nav-text" tooltip>Privacy and Security in Firebase</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/dpo_and_eu_rep"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/dpo_and_eu_rep"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/dpo_and_eu_rep"
      ><span class="devsite-nav-text" tooltip>Designate Data Protection Officers and EU Representatives</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/dpo"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/dpo"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/dpo"
      ><span class="devsite-nav-text" tooltip>Firebase Data Privacy Inquiries</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/manage-iids"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/manage-iids"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/manage-iids"
      ><span class="devsite-nav-text" tooltip>Manage Instance ID data</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/clear-export-data"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/clear-export-data"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/clear-export-data"
      ><span class="devsite-nav-text" tooltip>Clear and export users&#39; data</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/storing-privacy-settings"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/storing-privacy-settings"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/storing-privacy-settings"
      ><span class="devsite-nav-text" tooltip>Storing privacy settings with Firebase</span></a></li><li class="devsite-nav-item"><a href="/support/privacy/init-options"
        class="devsite-nav-title gc-analytics-event"
        data-category="Site-Wide Custom Events"
        data-label="Book nav link, pathname: /support/privacy/init-options"
        track-type="bookNav"
        track-name="click"
        track-metadata-eventdetail="/support/privacy/init-options"
      ><span class="devsite-nav-text" tooltip>Troubleshoot initialization options</span></a></li></ul></li>
          </ul>
        
        
          
    
      
      <ul class="devsite-nav-list" menu="Products"
          aria-label="Side menu" hidden>
        
          
            
            
              
<li class="devsite-nav-item">

  
  <a href="/products-build"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Build"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Build
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/products-release"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Release &amp; Monitor"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Release &amp; Monitor
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/products-engage"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Engage"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Engage
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
      
      <ul class="devsite-nav-list" menu="Solutions"
          aria-label="Side menu" hidden>
        
          
            
            
              
<li class="devsite-nav-item">

  
  <a href="/solutions/portal"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Explore all solutions"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Explore all solutions
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
  
    
      
      <ul class="devsite-nav-list" menu="Docs"
          aria-label="Side menu" hidden>
        
          
            
            
              
<li class="devsite-nav-item">

  
  <a href="/docs"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Overview"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Overview
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/guides"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Fundamentals"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Fundamentals
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/build"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Build"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Build
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/release"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Release &amp; Monitor"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Release &amp; Monitor
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/engage"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Engage"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Engage
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/reference"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Reference"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Reference
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/docs/samples"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Samples"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Samples
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
      
      <ul class="devsite-nav-list" menu="Community"
          aria-label="Side menu" hidden>
        
          
            
            
              
<li class="devsite-nav-item">

  
  <a href="/community/learn"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Learn"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Learn
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/community/events"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Events"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Events
   </span>
    
  
  </a>
  

</li>

            
              
<li class="devsite-nav-item">

  
  <a href="/community/stories"
    
       class="devsite-nav-title gc-analytics-event
              
              "
    

    
     data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Stories"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav">
  
    <span class="devsite-nav-text" tooltip >
      Stories
   </span>
    
  
  </a>
  

</li>

            
          
        
      </ul>
    
  
    
  
        
        
          
    
  
        
      </div>
    
  </div>
</nav>
        
      </devsite-book-nav>
      <section id="gc-wrapper">
        <main role="main" class="devsite-main-content"
            
              has-book-nav
              has-sidebar
            >
          
          
          <div class="devsite-sidebar">
            <div class="devsite-sidebar-content">
                
                <devsite-toc class="devsite-nav"
                            role="navigation"
                            aria-label="On this page"
                            depth="2"
                            scrollbars
                  ></devsite-toc>
                <devsite-recommendations-sidebar class="nocontent devsite-nav">
                </devsite-recommendations-sidebar>
            </div>
          </div>
          
          <devsite-content>
            
              











<article class="devsite-article"><style>
      /* Styles inlined from /styles/docs.css */
.center {
  text-align: center
}

/* Used in AdMob code examples */
.oldcode {
  opacity: .40;

  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);

  /* IE <= 7 */
  filter:alpha(opacity=40);
}

.newcode {
  font-weight: bold;
}

/* Device Screenshots */
.deviceshot {
  max-width: 700px;
  max-height: 400px;
}


/* Start Changelog styles */
.badge {
    position: relative;
    top: -3px;
    border-radius: 16px;
    display: inline-block;
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
}

/* Colours for each type of changelog entry. */
/* TODO: Change the colours to match the site colour scheme */

.badge-changed {
    background-color: #F4B400;
    color: #fff;
}

.badge-fixed {
    background-color: #4285F4;
    color: #fff;
}

.badge-important {
    background-color: #DB4437;
    color: #fff;
}

.badge-feature {
    background-color: #0F9D58;
    color: #fff;
}

.badge-deprecated {
    background-color: #DB4437;
    color: #fff;
}

.badge-issue {
    background-color: #DB4437;
    color: #fff;
}

.changelog > ul  {
  padding-left: 0;
}

.changelog > ul > li {
  list-style-type: none;
  margin-bottom: 22px;
}

.firebase-support-release-page .changelog > ul {
  list-style-type: none;
  padding-left: 110px;
}

.firebase-release-roundup .changelog > ul {
  list-style-type: disc outside;
  padding-left: 40px;
}

.firebase-release-roundup .changelog > ul > li {
  list-style-type: disc outside;
  margin-bottom: 12px;
}

.release-changed::before, .release-feature::before, .release-fixed::before,
.release-issue::before, .release-deprecated::before, .release-removed::before,
.release-unchanged::before, .release-rules::before,
.release-android::before, .release-android-bom::before, .release-ios::before,
.release-admin::before, .release-cpp::before, .release-unity::before,
.release-functions::before, .release-javascript::before,
.release-flutter::before, .release-cli::before {
  display: block;
  float: left;
  color: white;
  width: 100px;
  height: 32px;
  margin-left: -110px;
  margin-right: 10px;
  margin-top: -5px;
  padding-top: 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  border-radius: 16px;
}

.release-changed::before {
  content: "changed";
  background-color: #f4b400;
}

.release-feature::before {
  content: "feature";
  background-color: #0f9d58;
}

.release-fixed::before {
  content: "fixed";
  background-color: #4285f4;
}

.release-issue::before {
  content: "issue";
  background-color: #db4437;
}

.release-deprecated::before {
  content: "deprecated";
  background-color: #e65100;
}

.release-removed::before {
  content: "removed";
  background-color: #546e7a;
}

.release-unchanged::before {
  content: "no change";
  background-color: #ccc;
}

.release-android::before {
  content: "android";
  background-color: #a4c639;
}

.release-android-bom::before {
  content: "android bom";
  background-color: #a4c639;
}

.release-ios::before {
  text-transform: none;
  content: "iOS";
  background-color: #007aff;
}

.release-admin::before {
  content: "admin";
  background-color: #909090;
}

.release-flutter::before {
  content: "Flutter";
  background-color: #039be5;
}

.release-cpp::before {
  content: "c++";
  background-color: #ff8a65;
}

.release-unity::before {
  content: "unity";
  background-color: #0cc;
}

.release-functions::before {
  content: "functions";
  background-color: #2c384a;
}

.release-javascript::before {
  content: "javascript";
  background-color: #7e57c2;
}

.release-rules::before {
  content: "rules";
  background-color: #1b3a57;
}

.release-cli::before {
  text-transform: none;
  content: "CLI";
  background-color: #ffa000;
}

/* End Changelog styles */


/* Docs Overview page styles */

.docs-android,
.docs-ios,
.docs-web,
.docs-cpp,
.docs-unity {
  height: 64px;
  width: 64px;
  margin: 10px 16px 0 -16px;
}

.firebase-docs-overview .devsite-landing-row h2 {
  margin: 80px 0 -40px;
}

.devsite-landing-row-3-up .docs-landing-row-item {
    width: calc((100% - 80px)/2);
    display: inline-block;
}

.docs-landing-icon {
  font-size: 48px;
  height: 48px;
  margin: 11px;
  width: 48px;
}

.firebase-reference-list {
  display: -ms-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 0 40px;
  padding: 0;
}

.firebase-reference-list-item {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  margin: 40px 0 0;
  padding: 0;
}

.firebase-reference-list-item > a {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flex;
  display: flex;
}

.firebase-reference-list-item > a:not(:hover) h3 {
  color: #424242;
}

.firebase-reference-list-item > a:not(:hover) li,
.firebase-reference-list-item > a:not(:hover) p {
  color: #757575;
}

.firebase-reference-list-item .docs-landing-icon {
  -ms-flex-align: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  -ms-flex: 0 0 88px;
  flex: 0 0 88px;
  height: 88px;
  -ms-justify-content: center;
  justify-content: center;
  margin: 0 16px 0 0;
  padding: 20px;
}

.firebase-reference-list-item h3 {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 18px;
  line-height: 28px;
  margin: 0;
}

.firebase-reference-list-item ul {
  list-style: none;
  padding: 0;
}

.docs-android,
.docs-ios,
.docs-web,
.docs-cpp,
.docs-unity {
  height: 88px;
  width: auto;
}

.firebase-reference-list-item.docs-android .docs-landing-icon {
  color: #00bfa5;
}

.firebase-reference-list-item.docs-cpp .docs-landing-icon {
  color: #fd8c09;
}

.firebase-reference-list-item.docs-ios .docs-landing-icon {
  color: #16aaca;
}

.firebase-reference-list-item.docs-unity .docs-landing-icon {
  color: #000000;
}

.firebase-reference-list-item.docs-web .docs-landing-icon {
  color: #c52062;
}

.firebase-reference-list-item.docs-http .docs-landing-icon {
  color: #3F51B5;
}

@media (max-width: 1000px) {
  .firebase-reference-list {
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

/* end Docs Overview page styles */

/* Full-page platform selector for Crashlytics docs */
/* Note: h3 in selector content must include hide-from-toc */

.full-page-selector, .full-page-selector-content {
  border: none;
  font-size: inherit;
}

.full-page-selector > .kd-buttonbar {
  margin: 32px 0px;
}

.full-page-selector > section {
  display: none;
}

.full-page-selector-content > .selected {
  padding: 0;
  font-size: inherit;
}

.full-page-selector-content > .kd-buttonbar {
  display: none;
}

.select-page {
  display: none;
}

.select-page + .ds-selector-tabs,
.after-selection ~ .ds-selector-tabs {
  border: none;
  font-size: inherit;
}

.select-page + .ds-selector-tabs > .kd-buttonbar {
  margin: 32px 0px;
}

.select-page + .ds-selector-tabs > section {
  display: none;
}

.after-selection ~ .ds-selector-tabs > .selected {
  padding: 0;
  font-size: inherit;
}

.after-selection ~ .ds-selector-tabs > section p {
  line-height: 24px;
}

.after-selection ~ .ds-selector-tabs > .kd-buttonbar {
  display: none;
}

/* End full-page platform selector */

/* Custom beta and alpha indicators */

.devsite-nav-icon[data-icon="alpha"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M13.2,15c-0.3-0.9-0.6-1.7-0.9-2.6L12.1,12c0-0.1-0.1-0.3-0.1-0.4c-1.2,2.1-2.4,2.9-4.5,2.9C4.8,14.5,3,12.6,3,9s1.8-5.5,4.5-5.5c2.1,0,3.4,0.8,4.5,2.9L12.1,6l0.1-0.4c0.4-1.1,0.7-1.9,0.9-2.6h2.2c-0.4,0.8-0.7,1.7-1.2,3.2L14,6.6c-0.3,0.8-0.5,1.6-0.8,2.4c0.3,0.7,0.6,1.5,0.8,2.4l0.1,0.4c0.5,1.5,0.8,2.4,1.2,3.2C15.4,15,13.2,15,13.2,15z M7.5,5.5C5.9,5.5,5,6.5,5,9s0.9,3.5,2.5,3.5C9,12.5,9.9,11.6,11,9C9.9,6.4,9,5.5,7.5,5.5z' fill='%2380868b'/></svg>);
}

[theme='firebase-icy-theme'] .devsite-nav-icon[data-icon="alpha"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M13.2,15c-0.3-0.9-0.6-1.7-0.9-2.6L12.1,12c0-0.1-0.1-0.3-0.1-0.4c-1.2,2.1-2.4,2.9-4.5,2.9C4.8,14.5,3,12.6,3,9s1.8-5.5,4.5-5.5c2.1,0,3.4,0.8,4.5,2.9L12.1,6l0.1-0.4c0.4-1.1,0.7-1.9,0.9-2.6h2.2c-0.4,0.8-0.7,1.7-1.2,3.2L14,6.6c-0.3,0.8-0.5,1.6-0.8,2.4c0.3,0.7,0.6,1.5,0.8,2.4l0.1,0.4c0.5,1.5,0.8,2.4,1.2,3.2C15.4,15,13.2,15,13.2,15z M7.5,5.5C5.9,5.5,5,6.5,5,9s0.9,3.5,2.5,3.5C9,12.5,9.9,11.6,11,9C9.9,6.4,9,5.5,7.5,5.5z' fill='%2354617d'/></svg>);
}

[appearance='dark'] .devsite-nav-icon[data-icon="alpha"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M13.2,15c-0.3-0.9-0.6-1.7-0.9-2.6L12.1,12c0-0.1-0.1-0.3-0.1-0.4c-1.2,2.1-2.4,2.9-4.5,2.9C4.8,14.5,3,12.6,3,9s1.8-5.5,4.5-5.5c2.1,0,3.4,0.8,4.5,2.9L12.1,6l0.1-0.4c0.4-1.1,0.7-1.9,0.9-2.6h2.2c-0.4,0.8-0.7,1.7-1.2,3.2L14,6.6c-0.3,0.8-0.5,1.6-0.8,2.4c0.3,0.7,0.6,1.5,0.8,2.4l0.1,0.4c0.5,1.5,0.8,2.4,1.2,3.2C15.4,15,13.2,15,13.2,15z M7.5,5.5C5.9,5.5,5,6.5,5,9s0.9,3.5,2.5,3.5C9,12.5,9.9,11.6,11,9C9.9,6.4,9,5.5,7.5,5.5z' fill='%239eabc3'/></svg>);
}

.devsite-nav-icon[data-icon="beta"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M12.2,7.7c1.8,1.2,2.3,3.7,1.1,5.6c-0.7,1.1-2,1.8-3.3,1.8H7v2H5V4c0-1.1,0.9-2,2-2h2.5C11.4,2,13,3.6,13,5.5C13,6.3,12.7,7.1,12.2,7.7z M7,13h3c1.1,0,2-0.9,2-2s-0.9-2-2-2H7V13z M7,7h2.5C10.3,7,11,6.3,11,5.5S10.3,4,9.5,4H7V7z' fill='%2380868b'/></svg>);
}

[theme='firebase-icy-theme'] .devsite-nav-icon[data-icon="beta"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M12.2,7.7c1.8,1.2,2.3,3.7,1.1,5.6c-0.7,1.1-2,1.8-3.3,1.8H7v2H5V4c0-1.1,0.9-2,2-2h2.5C11.4,2,13,3.6,13,5.5C13,6.3,12.7,7.1,12.2,7.7z M7,13h3c1.1,0,2-0.9,2-2s-0.9-2-2-2H7V13z M7,7h2.5C10.3,7,11,6.3,11,5.5S10.3,4,9.5,4H7V7z' fill='%2354617d'/></svg>);
}

[appearance='dark'] .devsite-nav-icon[data-icon="beta"]::before {
  content: url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'><path d='M12.2,7.7c1.8,1.2,2.3,3.7,1.1,5.6c-0.7,1.1-2,1.8-3.3,1.8H7v2H5V4c0-1.1,0.9-2,2-2h2.5C11.4,2,13,3.6,13,5.5C13,6.3,12.7,7.1,12.2,7.7z M7,13h3c1.1,0,2-0.9,2-2s-0.9-2-2-2H7V13z M7,7h2.5C10.3,7,11,6.3,11,5.5S10.3,4,9.5,4H7V7z' fill='%239eabc3'/></svg>);
}

.firebase-platform-label {
 font: 500 12px/24px Roboto,sans-serif;
}
/* Full-page platform selector dropdown */
/* Note: use menu variables in _elements.html file */

.full-page-selector-dropdown {
  border: none;
  position: relative;
  float: left;
  display: inline-block;
}

.full-page-selector-dropdown > .ds-selector-tabs {
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
}

.full-page-selector-dropdown:hover .ds-selector-tabs {
    display: block;
    margin: 0;
}

.full-page-selector-dropdown:hover .kd-tabbutton {
    display: block;
    border: none;
    height: inherit;
    text-align: left;
}

.full-page-selector-dropdown:hover .kd-buttonbar {
    border: none;
    height: inherit;
}

.full-page-selector-dropdown h3:hover {
    color: white;
    background-color: #039be5;
}

.full-page-selector-dropdown:hover .devsite-overflow-menu-button {
    display: none;
}

      </style>
  
  
  

  <div class="devsite-article-meta nocontent" role="navigation">
    
    
    <ul class="devsite-breadcrumb-list"
  
    aria-label="Breadcrumb">
  
  <li class="devsite-breadcrumb-item
             ">
    
    
    
      
  <a href="https://firebase.google.com/"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Breadcrumbs"
      
        data-value="1"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="1"
      
        track-metadata-eventdetail="Firebase"
      
    >
    
        Firebase
      
  </a>
  
    
  </li>
  
  <li class="devsite-breadcrumb-item
             ">
    
      
      <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
    
    
    
      
  <a href="https://firebase.google.com/support"
      
        class="devsite-breadcrumb-link gc-analytics-event"
      
        data-category="Site-Wide Custom Events"
      
        data-label="Breadcrumbs"
      
        data-value="2"
      
        track-type="globalNav"
      
        track-name="breadcrumb"
      
        track-metadata-position="2"
      
        track-metadata-eventdetail=""
      
    >
    
        Support
      
  </a>
  
    
  </li>
  
</ul>
    
      
    <devsite-thumb-rating position="header">
    </devsite-thumb-rating>
  
    
  </div>
  
    <devsite-feedback
  position="header"
  project-name="Firebase"
  product-id="719752"
  bucket=""
  context=""
  version="t-devsite-webserver-20230725-r01-rc00.453786329912420857"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="header"
  class="nocontent"
  
  
    project-feedback-url="https://firebase.google.com/support/contact/bugs-features/"
  
  
    
      project-icon="https://firebase.google.com/_static/firebase/images/icon.svg"
    
  
  
    project-support-url="https://firebase.google.com/support/"
  
  feedback-type="thumb-rating">

  <button>
  
    
    Send feedback
  
  </button>
</devsite-feedback>
  <h1 class="devsite-page-title">Firebase Admin Node.js SDK Release Notes</h1><devsite-feature-tooltip
          ack-key="AckCollectionsBookmarkTooltipDismiss"
          analytics-category="Site-Wide Custom Events"
          analytics-action-show="Callout Profile displayed"
          analytics-action-close="Callout Profile dismissed"
          analytics-label="Create Collection Callout"
          class="devsite-page-bookmark-tooltip nocontent"
          dismiss-button="true"
          id="devsite-collections-dropdown"

          
          dismiss-button-text="Dismiss"

          
          close-button-text="Got it">

        
        <devsite-bookmark></devsite-bookmark>

        <span slot="popout-heading">
          
          Stay organized with collections
        </span>
        <span slot="popout-contents">
          
          Save and categorize content based on your preferences.
        </span>
      </devsite-feature-tooltip>
    
  

  <devsite-toc class="devsite-nav"
    depth="2"
    devsite-toc-embedded
    >
  </devsite-toc>
  
    
    <devsite-recommendations-dropdown class="nocontent"></devsite-recommendations-dropdown>
    
  

  






<div class="devsite-article-body clearfix
  ">

  
    <devsite-view-release-notes></devsite-view-release-notes>
  

  
    

    
    
  <div class="changelog">
  

<p>To review release notes for the Firebase console and for other Firebase
platforms and related SDKs, refer to the
<a href="/support/releases">Firebase Release Notes</a>.</p>

<h2 id="version_11101_-_13_july_2023" data-text="Version 11.10.1 - 13 July, 2023"><a name="11.10.1">Version 11.10.1 - 13 July, 2023</a></h2>

<h3 id="realtime-database" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue which caused the incompatibility in Realtime Database
types in version <a href="#11.10.0"><code translate="no" dir="ltr">11.10.0</code></a>.</li>
</ul>

<h2 id="version_11100_-_12_july_2023" data-text="Version 11.10.0 - 12 July, 2023"><a name="11.10.0">Version 11.10.0 - 12 July, 2023</a></h2>
<aside class="caution"><strong>Caution:</strong><span> This version introduced a regression in Realtime Database that caused
the incompatibility in Realtime Database types. Upgrade to <code translate="no" dir="ltr">11.10.1</code> or later.</span></aside>
<h3 id="realtime-database_1" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-issue"></span> This version contains a version bump in
<code translate="no" dir="ltr">@firebase/database-compat</code> and <code translate="no" dir="ltr">@firebase/database-types</code> dependencies
that causes an incompatibility in Realtime Database types.
This issue was fixed in version <a href="#11.10.1"><code translate="no" dir="ltr">11.10.1</code></a>.</li>
</ul>

<h3 id="cloud-storage" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">getDownloadURL()</code> API.</li>
</ul>

<h3 id="cloud-functions" data-text="Cloud Functions">Cloud Functions</h3>

<ul>
<li><span class="release-feature"></span> Added the ability to name tasks by including an <code translate="no" dir="ltr">id</code> when
enqueueing tasks.</li>
<li><span class="release-feature"></span> Added the ability to delete an enqueued task if it has not
yet completed.</li>
<li><span class="release-feature"></span> Headers passed to <code translate="no" dir="ltr">TaskQueue</code> HTTPS handlers are now available in
the context/event object.</li>
</ul>

<h3 id="cloud-firestore" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Added support for multiple named databases. This feature is
currently in public preview.</li>
</ul>

<h3 id="authentication" data-text="Authentication">Authentication</h3>

<ul>
<li><p><span class="release-fixed"></span> Added <code translate="no" dir="ltr">TotpInfo</code> field to the <code translate="no" dir="ltr">UserRecord</code> type.</p></li>
<li><p><span class="release-fixed"></span> Fixed a memory leak in the internal <code translate="no" dir="ltr">http</code> timeout handling code
that affected the <code translate="no" dir="ltr">listUsers()</code> API. Thanks
<a href="https://github.com/adrianjost">adrianjost</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/2236">contribution</a>.</p></li>
</ul>

<h2 id="version_1190_-_30_may_2023" data-text="Version 11.9.0 - 30 May, 2023"><a name="11.9.0">Version 11.9.0 - 30 May, 2023</a></h2>

<h3 id="authentication_1" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added support for configuring password policy in project and tenant
configurations.</li>
</ul>

<h3 id="cloud-firestore_1" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Exported <code translate="no" dir="ltr">Filter</code> type from the Cloud Firestore API.</li>
</ul>

<h2 id="version_1180_-_04_may_2023" data-text="Version 11.8.0 - 04 May, 2023"><a name="11.8.0">Version 11.8.0 - 04 May, 2023</a></h2>

<h3 id="firebase-app-check" data-text="Firebase App Check">Firebase App Check</h3>

<ul>
<li><span class="release-feature"></span> Added replay protection feature in the App Check <code translate="no" dir="ltr">verifyToken()</code>
API.</li>
</ul>

<h2 id="version_1170_-_18_april_2023" data-text="Version 11.7.0 - 18 April, 2023"><a name="11.7.0">Version 11.7.0 - 18 April, 2023</a></h2>

<h3 id="authentication_2" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added reCAPTCHA configuration support.</li>
</ul>

<h3 id="cloud-messaging" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><p><span class="release-feature"></span> Added <code translate="no" dir="ltr">sendEach()</code> and <code translate="no" dir="ltr">sendEachForMulticast()</code> APIs.</p></li>
<li><p><span class="release-changed"></span> <code translate="no" dir="ltr">sendAll()</code> and <code translate="no" dir="ltr">sendMulticast()</code> APIs are now deprecated.
Use <code translate="no" dir="ltr">sendEach()</code> and <code translate="no" dir="ltr">sendEachForMulticast()</code> APIs instead.</p></li>
</ul>

<h2 id="version_1160_-_06_april_2023" data-text="Version 11.6.0 - 06 April, 2023"><a name="11.6.0">Version 11.6.0 - 06 April, 2023</a></h2>

<h3 id="authentication_3" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">TOTP</code> as a multi-factor option in project and tenant
configuration.</li>
</ul>

<h3 id="cloud-messaging_1" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-changed"></span> Deprecated <code translate="no" dir="ltr">sendToDevice</code> and <code translate="no" dir="ltr">sendToDeviceGroup</code> methods and
their response classes. These methods are removed in the next major version.</li>
</ul>

<h2 id="version_1150_-_19_january_2023" data-text="Version 11.5.0 - 19 January, 2023"><a name="11.5.0">Version 11.5.0 - 19 January, 2023</a></h2>

<ul>
<li><span class="release-feature"></span> Added support for initializing the SDK with service account
impersonation in Application Default Credentials. Thanks
<a href="https://github.com/blue-hope">blue-hope</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/1862">contribution</a>.</li>
</ul>

<h3 id="cloud-firestore_2" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a caching issue in the Cloud Firestore API when
initialized with the <code translate="no" dir="ltr">preferRest</code> setting to force the use of REST transport.</li>
</ul>

<h2 id="version_1141_-_22_december_2022" data-text="Version 11.4.1 - 22 December, 2022"><a name="11.4.1">Version 11.4.1 - 22 December, 2022</a></h2>

<ul>
<li><span class="release-fixed"></span> Updated the <code translate="no" dir="ltr">jsonwebtoken</code> package to <code translate="no" dir="ltr">v9.0.0</code> to address
security concerns.</li>
</ul>

<h2 id="version_1140_-_15_december_2022" data-text="Version 11.4.0 - 15 December, 2022"><a name="11.4.0">Version 11.4.0 - 15 December, 2022</a></h2>

<h3 id="cloud-firestore_3" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> The Cloud Firestore API now supports the <code translate="no" dir="ltr">preferRest</code> setting
to force the use of REST transport until an operation requires gRPC.</li>
</ul>

<h3 id="cloud-messaging_2" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Increased the timeout in the Cloud Messaging batch send API to 15
seconds to avoid duplicate notifications.</li>
</ul>

<h3 id="firebase-ml" data-text="Firebase ML">Firebase ML</h3>

<ul>
<li><span class="release-changed"></span> Deprecated AutoML model support. AutoML model support will be
removed in the next major version.</li>
</ul>

<h2 id="version_1130_-_17_november_2022" data-text="Version 11.3.0 - 17 November, 2022"><a name="11.3.0">Version 11.3.0 - 17 November, 2022</a></h2>

<h3 id="firebase-extensions" data-text="Firebase Extensions">Firebase Extensions</h3>

<ul>
<li><span class="release-feature"></span> Added a new Extensions API to access the Extensions
runtime methods.</li>
</ul>

<h2 id="version_1121_-_10_november_2022" data-text="Version 11.2.1 - 10 November, 2022"><a name="11.2.1">Version 11.2.1 - 10 November, 2022</a></h2>

<h3 id="cloud-messaging_3" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Increased the timeout for Cloud Messaging requests to 15
seconds to avoid duplicate notifications.</li>
</ul>

<h3 id="cloud-firestore_4" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Exposed &#39;ReadWriteTransactionOptions&#39; from the <code translate="no" dir="ltr">firestore</code> module.
Thanks <a href="https://github.com/naodya">naodya</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/1875">contribution</a>.</li>
</ul>

<h2 id="version_1120_-_17_october_2022" data-text="Version 11.2.0 - 17 October, 2022"><a name="11.2.0">Version 11.2.0 - 17 October, 2022</a></h2>

<h3 id="authentication_4" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added SMS region config support for tenant and project
configuration.</li>
</ul>

<h3 id="cloud-firestore_5" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency to v6.4.0 to
support the <code translate="no" dir="ltr">COUNT</code> queries API.</li>
</ul>

<h2 id="version_1110_-_06_october_2022" data-text="Version 11.1.0 - 06 October, 2022"><a name="11.1.0">Version 11.1.0 - 06 October, 2022</a></h2>

<h3 id="cloud-firestore_6" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency to v6.3.0.</li>
</ul>

<h3 id="cloud-storage_1" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/storage</code> dependency to v6.5.2.</li>
</ul>

<h2 id="version_1101_-_28_july_2022" data-text="Version 11.0.1 - 28 July, 2022"><a name="11.0.1">Version 11.0.1 - 28 July, 2022</a></h2>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">admin.securityRules()</code> API now creates a new Security Rules
release if one does not already exist.</li>
</ul>

<h3 id="authentication_5" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">toJSON()</code> method in <code translate="no" dir="ltr">UserMetadata</code> now includes
<code translate="no" dir="ltr">lastRefreshTime</code> in the returned JSON output.</li>
</ul>

<h2 id="version_1100_-_16_june_2022" data-text="Version 11.0.0 - 16 June, 2022"><a name="11.0.0">Version 11.0.0 - 16 June, 2022</a></h2>

<ul>
<li><p><span class="release-changed"></span> <strong>Breaking change:</strong> Dropped support for Node.js 12. Developers should use Node.js 14
or higher when deploying the Admin SDK.</p></li>
<li><p><span class="release-changed"></span> <strong>Breaking change:</strong> Upgraded TypeScript to <a href="https://github.com/microsoft/TypeScript/releases/tag/v4.6.4">v4.6.4</a>.</p></li>
<li><p><span class="release-changed"></span> <strong>Breaking change:</strong> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> package to v5.
This contains breaking changes. Refer to the Cloud Firestore <a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v5.0.0">release notes</a> for more details.</p></li>
<li><p><span class="release-changed"></span> <strong>Breaking change:</strong> Upgraded the <code translate="no" dir="ltr">@google-cloud/storage</code> package to v6.
This contains breaking changes. Refer to the Cloud Storage <a href="https://github.com/googleapis/nodejs-storage/releases/tag/v6.0.0">release notes</a> for more details.</p></li>
</ul>

<h2 id="version_1030_-_09_june_2022" data-text="Version 10.3.0 - 09 June, 2022"><a name="10.3.0">Version 10.3.0 - 09 June, 2022</a></h2>

<ul>
<li><p><span class="release-changed"></span> Deprecated support for Node.js 12. Instead use Node.js 14 or
higher when deploying the Admin SDK. Node.js 12 support will be dropped in the
next major version.</p></li>
<li><p><span class="release-fixed"></span> Replaced the <code translate="no" dir="ltr">dicer</code> package with <code translate="no" dir="ltr">@fastify/busboy</code> to address
security issues in <code translate="no" dir="ltr">dicer</code>.</p></li>
</ul>

<h2 id="version_1020_-_05_may_2022" data-text="Version 10.2.0 - 05 May, 2022"><a name="10.2.0">Version 10.2.0 - 05 May, 2022</a></h2>

<h3 id="firebase-app-check_1" data-text="Firebase App Check">Firebase App Check</h3>

<ul>
<li><span class="release-changed"></span> Updated Firebase App Check APIs to use the <code translate="no" dir="ltr">v1</code> service
endpoint instead of the <code translate="no" dir="ltr">v1beta</code> endpoint.</li>
</ul>

<h3 id="authentication_6" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added the email action link generation APIs for creating links for
the request type <code translate="no" dir="ltr">VERIFY_AND_CHANGE_EMAIL</code> via
<code translate="no" dir="ltr">auth.generateVerifyAndChangeEmailLink()</code>.</li>
</ul>

<h3 id="cloud-functions_1" data-text="Cloud Functions">Cloud Functions</h3>

<ul>
<li><span class="release-feature"></span> Added an API to enqueue functions with Cloud Tasks.</li>
</ul>

<h2 id="version_1010_-_21_april_2022" data-text="Version 10.1.0 - 21 April, 2022"><a name="10.1.0">Version 10.1.0 - 21 April, 2022</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">node-forge</code> dependency to v1.3.1.</li>
</ul>

<h3 id="cloud-firestore_7" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency to v4.15.1.</li>
</ul>

<h3 id="cloud-storage_2" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/storage</code> dependency to v5.18.3.</li>
</ul>

<h2 id="version_1002_-_21_january_2022" data-text="Version 10.0.2 - 21 January, 2022"><a name="10.0.2">Version 10.0.2 - 21 January, 2022</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">node-forge</code> dependency to v1.0.0, which includes fixes
for a couple of known issues in previous package versions. (GitHub <a href="//github.com/advisories/GHSA-5rrq-pxf6-6jx5" class="external">GHSA-5rrq-pxf6-6jx5</a>,
GitHub <a href="//github.com/advisories/GHSA-gf8q-jrpm-jvxq" class="external">GHSA-gf8q-jrpm-jvxq</a>)</li>
</ul>

<h2 id="version_1001_-_15_december_2021" data-text="Version 10.0.1 - 15 December, 2021"><a name="10.0.1">Version 10.0.1 - 15 December, 2021</a></h2>

<h3 id="authentication_7" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">createSessionCookie()</code> API now correctly parses and maps
<code translate="no" dir="ltr">USER_DISABLED</code> server errors.</li>
<li><span class="release-fixed"></span> Removed request body from the <code translate="no" dir="ltr">deleteTenant()</code> API.</li>
</ul>

<h3 id="cloud-firestore_8" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Exposed <code translate="no" dir="ltr">BundleBuilder</code>, <code translate="no" dir="ltr">DocumentChange</code>, <code translate="no" dir="ltr">OrderByDirection</code>,
<code translate="no" dir="ltr">SetOptions</code>, and <code translate="no" dir="ltr">WhereFilterOp</code> Firestore SDK types from the <code translate="no" dir="ltr">firestore</code>
module and the <code translate="no" dir="ltr">admin.firestore</code> namespace.</li>
</ul>

<h2 id="version_1000_-_14_october_2021" data-text="Version 10.0.0 - 14 October, 2021"><a name="10.0.0">Version 10.0.0 - 14 October, 2021</a></h2>

<ul>
<li><span class="release-changed"></span> The Admin SDK now requires Node.js 12 or higher. Node.js 10
support has been discontinued.</li>
<li><span class="release-feature"></span> The Admin SDK now exposes a series of ES module entry points.
Developers are recommended to import Admin SDK APIs from these entry points.
The namespaced version of the API will be removed in a future major release.
Refer to the <a href="/docs/admin/migrate-node-v10">migration guide</a> for details
on how to update your existing code to use the new ES module entry points.</li>
<li><span class="release-feature"></span> The new module entry points can be used in native ESM runtimes.
You can enable the native ESM support on a server running Node.js 12+ by
setting the <code translate="no" dir="ltr">type: &quot;module&quot;</code> parameter in your project&#39;s <code translate="no" dir="ltr">package.json</code> file.
See <a href="https://nodejs.org/api/packages.html#packages_modules_packages">Node.js documentation</a>
for more details.</li>
</ul>

<h2 id="version_9120_-_28_september_2021" data-text="Version 9.12.0 - 28 September, 2021"><a name="9.12.0">Version 9.12.0 - 28 September, 2021</a></h2>

<h3 id="firebase-remote-config" data-text="Firebase Remote Config">Firebase Remote Config</h3>

<ul>
<li><span class="release-feature"></span> Added support for <a href="/docs/remote-config/parameters#parameter_value_data_types">Parameter value data types</a>.</li>
</ul>

<h3 id="realtime-database_2" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Refactored the <code translate="no" dir="ltr">admin.database()</code> API to use the new
<code translate="no" dir="ltr">@firebase/database-compat</code> package under the hood. This helps avoid several
dependency conflicts and type compilation errors when using the Firebase Web
SDK packages alongside the Admin SDK.</li>
</ul>

<h2 id="version_9111_-_19_august_2021" data-text="Version 9.11.1 - 19 August, 2021"><a name="9.11.1">Version 9.11.1 - 19 August, 2021</a></h2>

<h3 id="authentication_8" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> When <code translate="no" dir="ltr">checkRevoked</code> is set to <code translate="no" dir="ltr">true</code>, the <code translate="no" dir="ltr">verifyIdToken()</code> and
<code translate="no" dir="ltr">verifySessionCookie()</code> APIs now throw an error if the user record is disabled.</li>
</ul>

<h2 id="version_9110_-_15_july_2021" data-text="Version 9.11.0 - 15 July, 2021"><a name="9.11.0">Version 9.11.0 - 15 July, 2021</a></h2>

<h3 id="firebase-app-check_2" data-text="Firebase App Check">Firebase App Check</h3>

<ul>
<li><span class="release-feature"></span> The <code translate="no" dir="ltr">createToken()</code> API now supports configuring the <code translate="no" dir="ltr">TTL</code> of the
returned Firebase App Check token.</li>
</ul>

<h2 id="version_9100_-_24_june_2021" data-text="Version 9.10.0 - 24 June, 2021"><a name="9.10.0">Version 9.10.0 - 24 June, 2021</a></h2>

<h3 id="authentication_9" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Redefined <code translate="no" dir="ltr">AuthProviderConfig</code>, <code translate="no" dir="ltr">CreateMultiFactorInfoRequest</code> and
<code translate="no" dir="ltr">UpdateMultiFactorInfoRequest</code> interfaces as TypeScript union types. This
enables simpler and more idiomatic use of these types in developer
applications.</li>
</ul>

<h3 id="firebase_installations" data-text="Firebase Installations">Firebase Installations</h3>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">admin.installations()</code> API to replace the existing
<code translate="no" dir="ltr">admin.instanceId()</code> API.</li>
<li><span class="release-changed"></span> The <code translate="no" dir="ltr">admin.instanceId()</code> API is now deprecated and
the developers are advised to migrate to the <code translate="no" dir="ltr">admin.installations()</code> API for
deleting Firebase instance IDs and installation IDs.</li>
</ul>

<h2 id="version_990_-_26_may_2021" data-text="Version 9.9.0 - 26 May, 2021"><a name="9.9.0">Version 9.9.0 - 26 May, 2021</a></h2>

<ul>
<li><span class="release-changed"></span> The Admin SDK now requires Node.js 10.13.0 or higher.</li>
</ul>

<h3 id="authentication_10" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Made multi-factor authentication <code translate="no" dir="ltr">uid</code> optional for <code translate="no" dir="ltr">updateUser</code>
operations.</li>
<li><span class="release-feature"></span> Added support for configuring the authorization code flow for
OIDC providers (previously only supported the <code translate="no" dir="ltr">idToken</code> flow).</li>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">OAuthResponseType</code> for specifying the <code translate="no" dir="ltr">responseType</code> in
OIDC provider flow.</li>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">INVALID_OAUTH_RESPONSETYPE</code> and
<code translate="no" dir="ltr">MISSING_OAUTH_CLIENT_SECRET</code> error codes.</li>
</ul>

<h2 id="version_980_-_10_may_2021" data-text="Version 9.8.0 - 10 May, 2021"><a name="9.8.0">Version 9.8.0 - 10 May, 2021</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">@types/node</code> dependency to v12.12.47.
Thanks <a href="https://github.com/nikhilag">nikhilag</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/1258">contribution</a>.</li>
</ul>

<h3 id="authentication_11" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> The method <code translate="no" dir="ltr">generatePasswordResetLink()</code> now throws
an <code translate="no" dir="ltr">auth/email-not-found</code> error code if no user exists for the
specified email address.</li>
</ul>

<h3 id="realtime-database_3" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@firebase/database</code> dependency to version 0.10.0. This
makes the <code translate="no" dir="ltr">startAfter</code> and <code translate="no" dir="ltr">endBefore</code> query filters available for Admin SDK
users.</li>
</ul>

<h3 id="firebase-app-check_3" data-text="Firebase App Check">Firebase App Check</h3>

<ul>
<li><span class="release-feature"></span> Added Firebase abuse reduction support APIs.</li>
</ul>

<h2 id="version_970_-_27_april_2021" data-text="Version 9.7.0 - 27 April, 2021"><a name="9.7.0">Version 9.7.0 - 27 April, 2021</a></h2>

<h3 id="cloud-storage_3" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-feature"></span> Added support for the <code translate="no" dir="ltr">FIREBASE_STORAGE_EMULATOR_HOST</code> environment
variable.</li>
</ul>

<h3 id="realtime-database_4" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a token refresh livelock that affected the
Cloud Functions for Firebase users.</li>
</ul>

<h2 id="version_960_-_29_march_2021" data-text="Version 9.6.0 - 29 March, 2021"><a name="9.6.0">Version 9.6.0 - 29 March, 2021</a></h2>

<ul>
<li><span class="release-fixed"></span> Improved OAuth 2.0 token caching and management. The SDK now treats any
OAuth 2.0 token 5 minutes away from expiration as already expired, and proactively
refreshes it. This helps avoid certain types of authorization-related race
conditions.</li>
<li><span class="release-fixed"></span> The periodic token refresher background task has been decoupled from
the SDK core and moved into the RTDB module. This task no longer starts
automatically unless the <code translate="no" dir="ltr">admin.database()</code> API is explicitly invoked.</li>
</ul>

<h3 id="realtime-database_5" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-feature"></span> Rules management APIs now support the Firebase emulator suite.
Methods like <code translate="no" dir="ltr">getRules()</code> and <code translate="no" dir="ltr">setRules()</code> will automatically connect to the
local emulator when the emulator mode is enabled.</li>
</ul>

<h2 id="version_950_-_10_february_2021" data-text="Version 9.5.0 - 10 February, 2021"><a name="9.5.0">Version 9.5.0 - 10 February, 2021</a></h2>

<h3 id="authentication_12" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">getUserByProviderUid()</code> method to look up user
accounts by their providers.</li>
<li><span class="release-feature"></span> The <code translate="no" dir="ltr">updateUser()</code> method now supports linking a federated ID with
a user account.</li>
<li><span class="release-feature"></span> Allowed enabling of anonymous provider via tenant configuration.</li>
<li><span class="release-feature"></span> The <code translate="no" dir="ltr">verifyIdToken()</code> method now fully supports the Authentication
emulator.</li>
</ul>

<h3 id="cloud-messaging_4" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Exported all message types so they can be used by consumers.
Thanks <a href="https://github.com/BorntraegerMarc">BorntraegerMarc</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/1147">contribution</a>.</li>
</ul>

<h2 id="version_942_-_09_december_2020" data-text="Version 9.4.2 - 09 December, 2020"><a name="9.4.2">Version 9.4.2 - 09 December, 2020</a></h2>

<h3 id="cloud-messaging_5" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Support arbitrary custom values in the <code translate="no" dir="ltr">ApnsPayload</code> type.</li>
</ul>

<h3 id="realtime-database_6" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded dependencies <code translate="no" dir="ltr">@firebase/database</code> and
<code translate="no" dir="ltr">@firebase/database-types</code> to the latest available versions. This resolves an
inconsistency in the published typings of the Database API.</li>
</ul>

<h2 id="version_941_-_13_november_2020" data-text="Version 9.4.1 - 13 November, 2020"><a name="9.4.1">Version 9.4.1 - 13 November, 2020</a></h2>

<h3 id="firebase-remote-config_1" data-text="Firebase Remote Config">Firebase Remote Config</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a timestamp parsing issue in Remote Config template
<code translate="no" dir="ltr">Version</code> metadata that was causing Firebase Remote Config
API operations to fail.</li>
</ul>

<h2 id="version_940_-_12_november_2020" data-text="Version 9.4.0 - 12 November, 2020"><a name="9.4.0">Version 9.4.0 - 12 November, 2020</a></h2>

<h3 id="cloud-firestore_9" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Exposed several new types from the
<a href="/docs/reference/admin/node/admin.firestore"><code translate="no" dir="ltr">admin.firestore</code></a> namespace.
Newly exposed types include <code translate="no" dir="ltr">GrpcStatus</code>, <code translate="no" dir="ltr">FirestoreDataConverter</code>,
<code translate="no" dir="ltr">UpdateData</code>, and more.</li>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency to v4.5.0.</li>
</ul>

<h3 id="authentication_13" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a bug that was causing credential lookup errors when invoking
some APIs against the emulator.</li>
</ul>

<h2 id="version_930_-_22_october_2020" data-text="Version 9.3.0 - 22 October, 2020"><a name="9.3.0">Version 9.3.0 - 22 October, 2020</a></h2>

<h3 id="authentication_14" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added support for generating unsigned custom tokens for testing.</li>
<li><span class="release-feature"></span> Added support for verifying test ID tokens.</li>
</ul>

<h2 id="version_920_-_15_september_2020" data-text="Version 9.2.0 - 15 September, 2020"><a name="9.2.0">Version 9.2.0 - 15 September, 2020</a></h2>

<h3 id="firebase-ml_1" data-text="Firebase ML">Firebase ML</h3>

<ul>
<li><span class="release-feature"></span> Added support for creating, updating, getting, listing,
publishing, unpublishing, and deleting Firebase-hosted custom ML models
created with AutoML.</li>
</ul>

<h2 id="version_911_-_20_august_2020" data-text="Version 9.1.1 - 20 August, 2020"><a name="9.1.1">Version 9.1.1 - 20 August, 2020</a></h2>

<h3 id="firebase-remote-config_2" data-text="Firebase Remote Config">Firebase Remote Config</h3>

<ul>
<li><span class="release-fixed"></span> Added missing type definition for <code translate="no" dir="ltr">ListVersionsOptions</code>. Thanks
<a href="https://github.com/CodingAleCR">CodingAleCR</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/996">contribution</a>.</li>
</ul>

<h2 id="version_910_-_13_august_2020" data-text="Version 9.1.0 - 13 August, 2020"><a name="9.1.0">Version 9.1.0 - 13 August, 2020</a></h2>

<h3 id="authentication_15" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added the ability to enable/disable multi-factor authentication
with SMS on a Google Cloud Identity Platform tenant. Existing APIs like
<code translate="no" dir="ltr">createTenant()</code> and <code translate="no" dir="ltr">updateTenant()</code> now support configuring multi-factor
authentication and testing phone number/code pairs on a specified tenant.</li>
<li><span class="release-fixed"></span> Made <code translate="no" dir="ltr">displayName</code> optional in <code translate="no" dir="ltr">AuthProviderConfig</code> typings.</li>
</ul>

<h2 id="version_900_-_14_july_2020" data-text="Version 9.0.0 - 14 July, 2020"><a name="9.0.0">Version 9.0.0 - 14 July, 2020</a></h2>

<ul>
<li><span class="release-changed"></span> The Admin SDK now requires Node.js 10 or higher. Node.js 8
support has been discontinued.</li>
<li><span class="release-changed"></span> Upgraded dependency on the <code translate="no" dir="ltr">@google-cloud/firestore</code> package to
v4.</li>
<li><span class="release-changed"></span> Upgraded dependency on the <code translate="no" dir="ltr">@google-cloud/storage</code> package to v5.</li>
</ul>

<h2 id="version_8130_-_29_june_2020" data-text="Version 8.13.0 - 29 June, 2020"><a name="8.13.0">Version 8.13.0 - 29 June, 2020</a></h2>

<h3 id="authentication_16" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a timestamp parsing issue in the
<code translate="no" dir="ltr">UserMetadata.lastRefreshTime</code> field.</li>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">lastRefreshTime</code> field has been removed from
the <code translate="no" dir="ltr">UserMetadataRequest</code> type used in the <code translate="no" dir="ltr">importUsers()</code> API. Setting this
field is currently not supported in the Firebase Authentication backend.</li>
<li><span class="release-fixed"></span> Added <code translate="no" dir="ltr">GetUsersResult</code> and <code translate="no" dir="ltr">DeleteUsersResults</code> interfaces to the
exposed typings.</li>
</ul>

<h3 id="firebase-remote-config_3" data-text="Firebase Remote Config">Firebase Remote Config</h3>

<ul>
<li><span class="release-feature"></span> Added version management support for the <code translate="no" dir="ltr">admin.remoteConfig()</code>
API. This API now supports <code translate="no" dir="ltr">listVersions()</code>, <code translate="no" dir="ltr">getTemplateAtVersion()</code>, and
<code translate="no" dir="ltr">rollback()</code> operations to help developers programmatically manage their
Remote Config templates.</li>
</ul>

<h2 id="version_8121_-_08_may_2020" data-text="Version 8.12.1 - 08 May, 2020"><a name="8.12.1">Version 8.12.1 - 08 May, 2020</a></h2>

<h3 id="authentication_17" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed the typings of the <code translate="no" dir="ltr">UserMetadata</code> type to avoid a potentially
breaking change.</li>
</ul>

<h2 id="version_8120_-_06_may_2020" data-text="Version 8.12.0 - 06 May, 2020"><a name="8.12.0">Version 8.12.0 - 06 May, 2020</a></h2>

<h3 id="authentication_18" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">getUsers()</code> and <code translate="no" dir="ltr">deleteUsers()</code> APIs for retrieving and
deleting user accounts in bulk.</li>
<li><span class="release-fixed"></span> Updated the typings of the <code translate="no" dir="ltr">customClaims</code> attribute on <code translate="no" dir="ltr">UserRecord</code>
and <code translate="no" dir="ltr">UserImportRecord</code> interfaces.</li>
</ul>

<h2 id="version_8110_-_22_april_2020" data-text="Version 8.11.0 - 22 April, 2020"><a name="8.11.0">Version 8.11.0 - 22 April, 2020</a></h2>

<h3 id="authentication_19" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Exposed <code translate="no" dir="ltr">email</code>, <code translate="no" dir="ltr">email_verified</code>, <code translate="no" dir="ltr">phone_number</code>, and <code translate="no" dir="ltr">picture</code>
fields from the <code translate="no" dir="ltr">DecodedIdToken</code> type.</li>
</ul>

<h3 id="realtime-database_7" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded <code translate="no" dir="ltr">@firebase/database</code> dependency to v0.6.0, which provides a
new <code translate="no" dir="ltr">admin.database.ServerValue.increment()</code> function and fixed a database
URL parsing bug to support domains with more than 3 components.</li>
</ul>

<h3 id="firebase-ml_2" data-text="Firebase ML">Firebase ML</h3>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">admin.machineLearning()</code> API for creating, updating,
getting, listing, publishing, unpublishing, and deleting Firebase-hosted
custom ML models.</li>
</ul>

<h3 id="firebase-remote-config_4" data-text="Firebase Remote Config">Firebase Remote Config</h3>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">admin.remoteConfig()</code> API. This API enables Firebase
developers to programmatically manage the set of JSON-formatted parameters and
conditions known as the Remote Config template.</li>
</ul>

<h2 id="version_8100_-_12_march_2020" data-text="Version 8.10.0 - 12 March, 2020"><a name="8.10.0">Version 8.10.0 - 12 March, 2020</a></h2>

<h3 id="authentication_20" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added multi-factor authentication support with SMS for <a href="https://cloud.google.com/identity-platform/docs/how-to#mfa">Google
Cloud Identity Platform</a>.
Existing APIs like <code translate="no" dir="ltr">createUser()</code> and <code translate="no" dir="ltr">updateUser()</code> now
support configuring multi-factor authentication settings on user accounts.
See <a href="https://cloud.google.com/identity-platform/docs/admin/manage-mfa-users">documentation</a>
for more details and code samples.</li>
<li><span class="release-fixed"></span> Updated typings of the <code translate="no" dir="ltr">UserRecord.customClaims</code> attribute to allow
indexing by string keys. Thanks <a href="https://github.com/wSedlacek">wSedlacek</a> for
the <a href="https://github.com/firebase/firebase-admin-node/pull/768">contribution</a>.</li>
<li><span class="release-fixed"></span> Fixed a timestamp rounding error in the <code translate="no" dir="ltr">revokeRefreshTokens()</code> API
that caused some race conditions.</li>
</ul>

<h2 id="version_892_-_23_january_2020" data-text="Version 8.9.2 - 23 January, 2020"><a name="8.9.2">Version 8.9.2 - 23 January, 2020</a></h2>

<ul>
<li><span class="release-fixed"></span> Fixed a credential loading issue that prevented some functions
from being deployed via the Firebase CLI.</li>
</ul>

<h2 id="version_891_-_15_january_2020" data-text="Version 8.9.1 - 15 January, 2020"><a name="8.9.1">Version 8.9.1 - 15 January, 2020</a></h2>

<h3 id="authentication_21" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed the inability to discover the project ID when running on GCP
managed environments.</li>
</ul>

<h2 id="version_890_-_19_december_2019" data-text="Version 8.9.0 - 19 December, 2019"><a name="8.9.0">Version 8.9.0 - 19 December, 2019</a></h2>

<ul>
<li><span class="release-fixed"></span> Fixed a bug in the <code translate="no" dir="ltr">admin.instanceId().deleteInstanceId()</code> API that
caused errors even when the operation was completed successfully in the backend.</li>
<li><span class="release-feature"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency to v3.0.0. See the Firestore <a href="https://github.com/googleapis/nodejs-firestore/tree/v3.0.0">release
notes</a> for more
details.</li>
</ul>

<h3 id="cloud-messaging_6" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">sendMulticast()</code> API now correctly copies the <code translate="no" dir="ltr">fcmOptions</code> when
sending a message to multiple recipients.</li>
</ul>

<h3 id="realtime-database_8" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">@firebase/database</code> dependency to v0.5.17.</li>
</ul>

<h2 id="version_880_-_19_november_2019" data-text="Version 8.8.0 - 19 November, 2019"><a name="8.8.0">Version 8.8.0 - 19 November, 2019</a></h2>

<h3 id="cloud-firestore_10" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-feature"></span> Upgraded <code translate="no" dir="ltr">@google-cloud/firestore</code> dependency version to 2.6.0.
Thanks <a href="https://github.com/arjunyel">arjunyel</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/702">contribution</a>.</li>
</ul>

<h3 id="cloud-storage_4" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-changed"></span> Upgraded <code translate="no" dir="ltr">@google-cloud/storage</code> dependency version to 4.1.2. This
version contains some minor breaking changes. Check the <a href="https://github.com/googleapis/nodejs-storage/releases/tag/v4.0.0">release
notes</a> of the
dependency for more information. Thanks <a href="https://github.com/arjunyel">arjunyel</a>
for the
<a href="https://github.com/firebase/firebase-admin-node/pull/702">contribution</a>.</li>
</ul>

<h3 id="authentication_22" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">verifyIdToken()</code> method now correctly uses the <code translate="no" dir="ltr">http.Agent</code>
configured during SDK initialization.</li>
</ul>

<h3 id="cloud-messaging_7" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Batch messaging APIs <code translate="no" dir="ltr">sendAll()</code> and <code translate="no" dir="ltr">sendMulticast()</code> now support
sending up to 500 messages in a single call.</li>
</ul>

<h2 id="version_870_-_30_october_2019" data-text="Version 8.7.0 - 30 October, 2019"><a name="8.7.0">Version 8.7.0 - 30 October, 2019</a></h2>

<h3 id="cloud-messaging_8" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Added a series of new parameters to the <code translate="no" dir="ltr">AndroidNotification</code> class
that allow further customization of notifications that target Android devices.</li>
</ul>

<h2 id="version_861_-_16_october_2019" data-text="Version 8.6.1 - 16 October, 2019"><a name="8.6.1">Version 8.6.1 - 16 October, 2019</a></h2>

<h3 id="authentication_23" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> <code translate="no" dir="ltr">UserRecord</code> no longer exposes password hashes that are
redacted due to lack of permissions in the service account credentials.</li>
<li><span class="release-fixed"></span> Updated the typings of the <code translate="no" dir="ltr">setCustomUserClaims()</code> API to accept
<code translate="no" dir="ltr">null</code>.</li>
</ul>

<h2 id="version_860_-_18_september_2019" data-text="Version 8.6.0 - 18 September, 2019"><a name="8.6.0">Version 8.6.0 - 18 September, 2019</a></h2>

<ul>
<li><span class="release-feature"></span> Added a new <code translate="no" dir="ltr">admin.securityRules()</code> API for managing Firebase
security rules applied on services like Cloud Firestore and Cloud Storage.
See the Firebase documentation to learn more about how to
<a href="/docs/rules/manage-deploy#use_the_admin_sdk">use the Admin SDK</a> to manage and
deploy security rules.</li>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">getFirestoreRuleset()</code> and <code translate="no" dir="ltr">getStorageRuleset()</code> methods for
retrieving rulesets that are currently in effect.</li>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">releaseFirestoreRuleset()</code> and <code translate="no" dir="ltr">releaseStorageRuleset()</code>
methods for creating new rulesets and applying them to Cloud Firestore and
Cloud Storage.</li>
<li><span class="release-feature"></span> Added <code translate="no" dir="ltr">getRuleset()</code>, <code translate="no" dir="ltr">createRuleset()</code> and <code translate="no" dir="ltr">deleteRuleset()</code>
methods for managing the lifecycle of a ruleset.</li>
</ul>

<h3 id="cloud-messaging_9" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Added new APIs for specifying an image URL in notifications.</li>
</ul>

<h2 id="version_850_-_05_september_2019" data-text="Version 8.5.0 - 05 September, 2019"><a name="8.5.0">Version 8.5.0 - 05 September, 2019</a></h2>

<h3 id="authentication_24" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added multi-tenancy support to the authentication service (Google
Cloud Identity Platform project required). Tenant related APIs are exposed via
<a href="/docs/reference/admin/node/admin.auth.Auth#tenantManager"><code translate="no" dir="ltr">tenantManager()</code></a> on
the <a href="/docs/reference/admin/node/admin.auth"><code translate="no" dir="ltr">admin.auth</code></a> interface.</li>
<li><span class="release-feature"></span> Added tenant management APIs <code translate="no" dir="ltr">authForTenant()</code>, <code translate="no" dir="ltr">getTenant()</code>,
<code translate="no" dir="ltr">listTenants()</code>, <code translate="no" dir="ltr">deleteTenant()</code>, <code translate="no" dir="ltr">createTenant()</code> and <code translate="no" dir="ltr">updateTenant()</code> to the
newly defined <code translate="no" dir="ltr">TenantManager</code>.</li>
<li><span class="release-feature"></span> Defined <code translate="no" dir="ltr">TenantAwareAuth</code> interface retrieved via
<code translate="no" dir="ltr">TenantManager#authForTenant()</code> for managing users, configuring SAML/OIDC
providers, generating email links for password reset, email verification, etc
for specific tenants.</li>
</ul>

<h3 id="realtime-database_9" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded <code translate="no" dir="ltr">@firebase/database</code> dependency version to 0.5.1. This helps
avoid some peer dependency warnings that were observed during package
installation.</li>
</ul>

<h2 id="version_840_-_21_august_2019" data-text="Version 8.4.0 - 21 August, 2019"><a name="8.4.0">Version 8.4.0 - 21 August, 2019</a></h2>

<h3 id="cloud-messaging_10" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Added support for specifying Analytics labels for notifications.
Thanks <a href="https://github.com/chemidy">chemidy</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/597">contribution</a>.</li>
</ul>

<h2 id="version_830_-_july_24_2019" data-text="Version 8.3.0 - July 24, 2019"><a name="8.3.0">Version 8.3.0 - July 24, 2019</a></h2>

<h3 id="realtime-database_10" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-feature"></span> Added an <a href="/docs/reference/admin/node/admin.database.Database#getrules"><code translate="no" dir="ltr">admin.database().getRules()</code></a>
method to retrieve the currently applied Realtime Database rules text.</li>
<li><span class="release-feature"></span> Added an <a href="/docs/reference/admin/node/admin.database.Database#get-rulesjson"><code translate="no" dir="ltr">admin.database().getRulesJSON()</code></a>
method to retrieve the currently applied Realtime Database rules as a
parsed JSON object.</li>
<li><span class="release-feature"></span> Added an <a href="/docs/reference/admin/node/admin.database.Database#set-rules"><code translate="no" dir="ltr">admin.database().setRules()</code></a>
method to update Realtime Database rules.</li>
<li><span class="release-fixed"></span> Downgraded the dependency on the <code translate="no" dir="ltr">@firebase/app</code> package
to a dev dependency.</li>
</ul>

<h3 id="authentication_25" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Implemented additional argument validation in the
<code translate="no" dir="ltr">admin.auth().importUsers()</code> API.</li>
</ul>

<h3 id="cloud-storage_5" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-changed"></span> Upgraded the <code translate="no" dir="ltr">@google-cloud/storage</code> dependency to v3.0.0.
This new major version drops support for Node.js versions older than v8.
Since <code translate="no" dir="ltr">firebase-admin</code> already supports only Node.js v8 and above,
this does not have a noticeable impact on users of the Admin SDK.</li>
</ul>

<h2 id="version_820_-_june_19_2019" data-text="Version 8.2.0 - June 19, 2019"><a name="8.2.0">Version 8.2.0 - June 19, 2019</a></h2>

<ul>
<li><span class="release-fixed"></span> Updated the metadata server URL (used by the application default
credentials) to the <code translate="no" dir="ltr">v1</code> endpoint. This makes it possible to use the SDK
in Google Kubernetes Engine again.</li>
</ul>

<h3 id="realtime-database_11" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">@firebase/database</code> dependency to v0.4.4.</li>
</ul>

<h3 id="firebase-cloud-messaging" data-text="Firebase Cloud Messaging">Firebase Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Gracefully handling array-like objects in <code translate="no" dir="ltr">messaging.sendAll()</code> and
<code translate="no" dir="ltr">messaging.sendMulticast()</code> APIs.</li>
</ul>

<h2 id="version_810_-_june_11_2019" data-text="Version 8.1.0 - June 11, 2019"><a name="8.1.0">Version 8.1.0 - June 11, 2019</a></h2>

<ul>
<li><span class="release-fixed"></span> The SDK now automatically retries HTTP calls failing due to 503
errors.</li>
</ul>

<h3 id="project_management" data-text="Project Management">Project Management</h3>

<ul>
<li><span class="release-feature"></span> Added a new
<a href="/docs/reference/admin/node/admin.projectManagement.ProjectManagement#listappmetadata"><code translate="no" dir="ltr">projectManagement.listAppMetadata()</code></a>
API to list the summarized details of up to 100 apps in a Firebase project.</li>
<li><span class="release-feature"></span> Added a new
<a href="/docs/reference/admin/node/admin.projectManagement.ProjectManagement#setdisplayname"><code translate="no" dir="ltr">projectManagement.setDisplayName()</code></a>
API to update the display name of a Firebase project.</li>
</ul>

<h2 id="version_800_-_may_23_2019" data-text="Version 8.0.0 - May 23, 2019"><a name="8.0.0">Version 8.0.0 - May 23, 2019</a></h2>

<ul>
<li><span class="release-changed"></span> The Admin SDK no longer supports Node 6. Developers must use
Node 8.13.0 or higher when deploying the Admin SDK.</li>
</ul>

<h3 id="cloud_firestore" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client dependency to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v2.0.0">v2.0.0</a>.
This upgrade comes with a pure JS gRPC client implementation
that is much smaller on disk.</li>
</ul>

<h3 id="cloud_storage" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Storage client dependency to
<a href="https://github.com/googleapis/nodejs-storage/releases/tag/v2.5.0">v2.5.0</a>.</li>
</ul>

<h2 id="version_740_-_may_21_2019" data-text="Version 7.4.0 - May 21, 2019"><a name="7.4.0">Version 7.4.0 - May 21, 2019</a></h2>

<ul>
<li><span class="release-changed"></span> Support for Node 6 is now deprecated. Developers are recommended
to use Node 8 or higher when deploying the Admin SDK. An upcoming release
will completely drop Node 6 support.</li>
</ul>

<h3 id="cloud_firestore_2" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client dependency to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v1.3.0">v1.3.0</a>.
This upgrade comes with a new API for executing collection group
queries.</li>
</ul>

<h3 id="realtime-database_12" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Updated typings of the <code translate="no" dir="ltr">admin.database.ThenableReference</code> type to
extend from the built-in <code translate="no" dir="ltr">Promise</code> type.</li>
</ul>

<h2 id="version_730_-_april_17_2019" data-text="Version 7.3.0 - April 17, 2019"><a name="7.3.0">Version 7.3.0 - April 17, 2019</a></h2>

<h3 id="authentication_26" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added new APIs for managing SAML and OIDC provider
configurations. These APIs support CRUD operations on auth provider
configurations:
<ul>
<li><code translate="no" dir="ltr">auth.listProviderConfigs()</code></li>
<li><code translate="no" dir="ltr">auth.getProviderConfig()</code></li>
<li><code translate="no" dir="ltr">auth.deleteProviderConfig()</code></li>
<li><code translate="no" dir="ltr">auth.updateProviderConfig()</code></li>
<li><code translate="no" dir="ltr">auth.createProviderConfig()</code></li>
</ul></li>
</ul>

<h2 id="version_720_-_march_28_2019" data-text="Version 7.2.0 - March 28, 2019"><a name="7.2.0">Version 7.2.0 - March 28, 2019</a></h2>

<h3 id="cloud_firestore_3" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client dependency to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v1.2.0">v1.2.0</a>.
This upgrade exposes the <code translate="no" dir="ltr">v1beta</code> and <code translate="no" dir="ltr">v1</code> clients, which provide direct access
to the underlying Firestore and Firestore Admin RPCs. Please note that you
must provide your Firebase credentials directly to these clients.</li>
</ul>

<h2 id="version_711_-_march_20_2019" data-text="Version 7.1.1 - March 20, 2019"><a name="7.1.1">Version 7.1.1 - March 20, 2019</a></h2>

<h3 id="firebase-cloud-messaging_1" data-text="Firebase Cloud Messaging">Firebase Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Fixed a bug in the FCM batch APIs that prevented them from
correctly handling some message parameters like <code translate="no" dir="ltr">AndroidConfig.ttl</code>.</li>
</ul>

<h2 id="version_710_-_march_14_2019" data-text="Version 7.1.0 - March 14, 2019"><a name="7.1.0">Version 7.1.0 - March 14, 2019</a></h2>

<h3 id="firebase-cloud-messaging_2" data-text="Firebase Cloud Messaging">Firebase Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> A new
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendMulticast"><code translate="no" dir="ltr">messaging.sendMulticast()</code></a>
API for sending a message to a list of device registration tokens.</li>
<li><span class="release-feature"></span> A new
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendAll"><code translate="no" dir="ltr">messaging.sendAll()</code></a>
API for sending a list of messages as a single batch.</li>
</ul>

<h3 id="authentication_27" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Improved typings of the <code translate="no" dir="ltr">auth.UpdateRequest</code> interface to clearly
specify the nullable fields.</li>
</ul>

<h3 id="cloud_firestore_4" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client dependency to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v1.1.0">v1.1.0</a>.</li>
</ul>

<h2 id="version_700_-_january_31_2019" data-text="Version 7.0.0 - January 31, 2019"><a name="7.0.0">Version 7.0.0 - January 31, 2019</a></h2>

<ul>
<li><span class="release-changed"></span> Updated the Google Cloud Firestore client to v1.0.1. This contains breaking changes.
Refer to the Cloud Firestore <a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.20.0">release notes</a>
for more details and migration instructions.</li>
<li><span class="release-changed"></span> Updated the Google Cloud Storage client to v2.3.0. This contains breaking changes.
Refer to the Cloud Storage <a href="https://github.com/googleapis/nodejs-storage/releases/tag/v2.0.0">release notes</a>
for more details and migration instructions.</li>
</ul>

<h3 id="authentication_28" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-changed"></span> The <code translate="no" dir="ltr">verifyIdToken()</code> and <code translate="no" dir="ltr">verifySessionCookie()</code> methods now return
<code translate="no" dir="ltr">auth/id-token-expired</code> and <code translate="no" dir="ltr">auth/session-cookie-expired</code> error codes for expired JWTs.</li>
<li><span class="release-fixed"></span> Credentials-related errors are now reported with additional helpful details.</li>
</ul>

<h2 id="version_651_-_january_23_2019" data-text="Version 6.5.1 - January 23, 2019"><a name="6.5.1">Version 6.5.1 - January 23, 2019</a></h2>

<ul>
<li><span class="release-fixed"></span> Setting the <code translate="no" dir="ltr">GOOGLE_APPLICATION_CREDENTIALS</code> environment
variable to a refresh token file instead of a service account file
is now supported. Thanks <a href="https://github.com/yinzara">yinzara</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/444">contribution</a>.</li>
<li><span class="release-fixed"></span> Implemented an environment check that is executed at
package import time. The Admin SDK logs a warning if imported into a
client environment such as a web browser.</li>
</ul>

<h2 id="version_650_-_january_9_2019" data-text="Version 6.5.0 - January 9, 2019"><a name="6.5.0">Version 6.5.0 - January 9, 2019</a></h2>

<ul>
<li><span class="release-feature"></span> A new <code translate="no" dir="ltr">shaCertificate()</code> method for creating instances of
<a href="/docs/reference/admin/node/admin.projectManagement.ShaCertificate"><code translate="no" dir="ltr">admin.projectManagement.ShaCertificate</code></a>.</li>
</ul>

<h3 id="authentication_29" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed how the SDK parses the error codes sent by auth backend
servers.</li>
<li><span class="release-fixed"></span> Correctly marked optional fields in the
<a href="/docs/reference/admin/node/admin.auth.UserRecord"><code translate="no" dir="ltr">UserRecord</code></a> type.</li>
</ul>

<h2 id="version_640_-_december_12_2018" data-text="Version 6.4.0 - December 12, 2018"><a name="6.4.0">Version 6.4.0 - December 12, 2018</a></h2>

<ul>
<li><span class="release-feature"></span> <a href="/docs/reference/admin/node/admin.app.AppOptions"><code translate="no" dir="ltr">AppOptions</code></a>
now accepts an optional <code translate="no" dir="ltr">http.Agent</code> object. The
<code translate="no" dir="ltr">http.Agent</code> specified via this API is used when the SDK makes backend
HTTP calls. This can be used when it is required to deploy the Admin SDK
behind a proxy.</li>
<li><span class="release-feature"></span> <code translate="no" dir="ltr">admin.credential.cert()</code>, <code translate="no" dir="ltr">admin.credential.applicationDefault()</code>,
and <code translate="no" dir="ltr">admin.credential.refreshToken()</code> methods now accept an <code translate="no" dir="ltr">http.Agent</code>
as an optional argument. If specified, the <code translate="no" dir="ltr">http.Agent</code> is used
when calling Google backend servers to fetch OAuth2 access tokens.</li>
</ul>

<h3 id="cloud-messaging_11" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> The <a href="/docs/reference/admin/node/admin.messaging.Aps"><code translate="no" dir="ltr">messaging.Aps</code></a>
type now supports configuring a critical alert sound.
A new <a href="/docs/reference/admin/node/admin.messaging.CriticalSound"><code translate="no" dir="ltr">messaging.CriticalSound</code></a>
type has been introduced for this purpose.</li>
<li><span class="release-feature"></span> The <a href="/docs/reference/admin/node/admin.messaging.AndroidNotification"><code translate="no" dir="ltr">messaging.AndroidNotification</code></a>
type now supports specifying a <code translate="no" dir="ltr">channelId</code>
field when sending messages to Android O clients.</li>
</ul>

<h2 id="version_630_-_november_28_2018" data-text="Version 6.3.0 - November 28, 2018"><a name="6.3.0">Version 6.3.0 - November 28, 2018</a></h2>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.projectManagement"><code translate="no" dir="ltr">admin.projectManagement()</code></a>
API for managing apps in a Firebase project.</li>
<li><span class="release-feature"></span> New <code translate="no" dir="ltr">listAndroidApps()</code> and <code translate="no" dir="ltr">listIosApps()</code> methods for
listing the existing apps in a project.</li>
<li><span class="release-feature"></span> New <code translate="no" dir="ltr">createAndroidApp()</code> and <code translate="no" dir="ltr">createIosApp()</code> methods
for creating new apps in a project.</li>
<li><span class="release-feature"></span> New <a href="/docs/reference/admin/node/admin.projectManagement.AndroidApp"><code translate="no" dir="ltr">AndroidApp</code></a>
and <a href="/docs/reference/admin/node/admin.projectManagement.IosApp"><code translate="no" dir="ltr">IosApp</code></a>
APIs for updating individual apps.</li>
</ul>

<h3 id="cloud-messaging_12" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> <code translate="no" dir="ltr">ApsAlert</code> type now supports specifying a subtitle.
Thanks <a href="https://github.com/chemidy">chemidy</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/393">contribution</a>.</li>
</ul>

<h2 id="version_620_-_november_19_2018" data-text="Version 6.2.0 - November 19, 2018"><a name="6.2.0">Version 6.2.0 - November 19, 2018</a></h2>

<h3 id="authentication_30" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added the email action link generation APIs for creating links
for password reset, email verification and email link sign-in via
<code translate="no" dir="ltr">auth.generatePasswordResetLink()</code>, <code translate="no" dir="ltr">auth.generateEmailVerificationLink()</code>
and <code translate="no" dir="ltr">auth.generateSignInWithEmailLink()</code>.
Refer <a href="/docs/auth/admin/email-action-links">documentation</a> for more
details and code samples.</li>
</ul>

<h3 id="cloud_firestore_5" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded Cloud Firestore client to v0.19.0.</li>
<li><span class="release-fixed"></span> Exposed the <code translate="no" dir="ltr">Transaction</code> type from the <code translate="no" dir="ltr">admin.firestore</code> namespace.</li>
</ul>

<h3 id="cloud-messaging_13" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Improved error handling in FCM. The SDK now checks the key
<code translate="no" dir="ltr">type.googleapis.com/google.firebase.fcm.v1.FcmError</code> to set error code.
Thanks <a href="https://github.com/chemidy">chemidy</a> for the
<a href="https://github.com/firebase/firebase-admin-node/pull/391">contribution</a>.</li>
</ul>

<h2 id="version_610_-_october_22_2018" data-text="Version 6.1.0 - October 22, 2018"><a name="6.1.0">Version 6.1.0 - October 22, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.16.0 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.18.0">0.18.0</a>.</li>
</ul>

<h2 id="version_600_-_august_9_2018" data-text="Version 6.0.0 - August 9, 2018"><a name="6.0.0">Version 6.0.0 - August 9, 2018</a></h2>

<ul>
<li><span class="release-changed"></span> The Admin SDK no longer supports Node.js 4. Developers must use
Node.js 6 or higher to deploy the Admin SDK.</li>
<li><span class="release-changed"></span> The Admin SDK now installs Cloud Firestore and Cloud Storage
libraries as optional dependencies. SDK installation no longer fails when
encountering errors from Cloud Firestore, Cloud Storage or gRPC dependencies.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.15.4 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.16.0">0.16.0</a>.
This version contains a new <code translate="no" dir="ltr">array-contains</code> query operator and
<code translate="no" dir="ltr">FieldValue.arrayUnion()</code> and <code translate="no" dir="ltr">FieldValue.arrayRemove()</code> APIs.</li>
</ul>

<h2 id="version_5131_-_july_23_2018" data-text="Version 5.13.1 - July 23, 2018"><a name="5.13.0">Version 5.13.1 - July 23, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.15.2 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.15.4">0.15.4</a>.
This version contains a bug fix that enables using it in environments
where application default credentials are not available.</li>
</ul>

<h2 id="version_5130_-_july_17_2018" data-text="Version 5.13.0 - July 17, 2018"><a name="5.13.0">Version 5.13.0 - July 17, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> The Admin SDK can now read the Firebase/Google Cloud Platform
project ID from both <code translate="no" dir="ltr">GCLOUD_PROJECT</code> and <code translate="no" dir="ltr">GOOGLE_CLOUD_PROJECT</code> environment
variables.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.14.0 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.15.2">0.15.2</a>.
This version of the Firestore client changes how date values are handled.</li>
</ul>

<h3 id="authentication_31" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> The Admin SDK can now create custom tokens without being
initialized with service account credentials.</li>
<li><span class="release-feature"></span> The SDK accepts a new <code translate="no" dir="ltr">serviceAccountId</code>
app option, which can be used to specify just the client email of a service
account.</li>
<li><span class="release-feature"></span> When deployed in an environment managed by Google (e.g. Google
Cloud Functions), the SDK can auto discover a service account ID without
any explicit configuration.</li>
</ul>

<h3 id="realtime-database_13" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Updated typings of the <code translate="no" dir="ltr">admin.database.Query.once()</code> method to
return a more specific type.</li>
</ul>

<h3 id="cloud-messaging_14" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Updated typings of the <code translate="no" dir="ltr">admin.messaging.WebpushNotification</code> type
to include all supported notification fields.</li>
</ul>

<h2 id="version_5121_-_may_15_2018" data-text="Version 5.12.1 - May 15, 2018"><a name="5.12.1">Version 5.12.1 - May 15, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> Admin SDK now lazy loads all child namespaces and certain heavy
dependencies for faster load times. This change also ensures that only
the sources for namespaces that are actually used get loaded into the
Node.js process.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.13.0 to 0.14.0.</li>
</ul>

<h2 id="version_5120_-_april_05_2018" data-text="Version 5.12.0 - April 05, 2018"><a name="5.12.0">Version 5.12.0 - April 05, 2018</a></h2>

<h3 id="authentication_32" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#createSessionCookie"><code translate="no" dir="ltr">auth.createSessionCookie()</code></a>
method for creating a session cookie from a Firebase ID token.</li>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#verifySessionCookie"><code translate="no" dir="ltr">auth.verifySessionCookie()</code></a>
method for validating a given session cookie string.</li>
</ul>

<h3 id="cloud-messaging_15" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Added the <code translate="no" dir="ltr">mutableContent</code> optional field to the
<a href="/docs/reference/admin/node/admin.messaging.Aps"><code translate="no" dir="ltr">messaging.Aps</code></a>
type. This can be used to set the <code translate="no" dir="ltr">mutable-content</code> property when sending
FCM messages to APNS targets.</li>
<li><span class="release-feature"></span> Added support for specifying arbitrary key-value fields in the
<code translate="no" dir="ltr">messaging.Aps</code> type.</li>
</ul>

<h2 id="version_5110_-_march_15_2018" data-text="Version 5.11.0 - March 15, 2018"><a name="5.11.0">Version 5.11.0 - March 15, 2018</a></h2>

<h3 id="authentication_33" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#importUsers"><code translate="no" dir="ltr">auth.importUsers()</code></a>
method for <a href="/docs/auth/admin/import-users">importing users</a> to Firebase Auth
in bulk.</li>
</ul>

<h2 id="version_5100_-_march_08_2018" data-text="Version 5.10.0 - March 08, 2018"><a name="5.10.0">Version 5.10.0 - March 08, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the Realtime Database client from 0.1.11 to 0.2.0. This
provides the ability to call
<a href="/docs/reference/admin/node/admin.database.Database#ref"><code translate="no" dir="ltr">admin.database().ref()</code></a>
with an existing reference as the argument.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.12.0 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.13.0">0.13.0</a>.</li>
</ul>

<h2 id="version_591_-_february_28_2018" data-text="Version 5.9.1 - February 28, 2018"><a name="5.9.1">Version 5.9.1 - February 28, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> The <code translate="no" dir="ltr">admin.initializeApp()</code> method can now be invoked without a
<code translate="no" dir="ltr">credential</code> option. The SDK uses Google Application Default Credentials
when initialized this way.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client from 0.11.1 to
<a href="https://github.com/googleapis/nodejs-firestore/releases/tag/v0.12.0">0.12.0</a>.</li>
<li><span class="release-fixed"></span> Upgraded the Cloud Storage client from 1.2.1 to 1.6.0.</li>
<li><span class="release-fixed"></span> Upgraded the Realtime Database client from 0.1.3 to 0.1.11.</li>
</ul>

<h2 id="version_590_-_february_14_2018" data-text="Version 5.9.0 - February 14, 2018"><a name="5.9.0">Version 5.9.0 - February 14, 2018</a></h2>

<h3 id="cloud-messaging_16" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.messaging.Messaging#send"><code translate="no" dir="ltr">messaging.send()</code></a>
method for sending FCM messages.</li>
</ul>

<h2 id="version_582_-_january_30_2018" data-text="Version 5.8.2 - January 30, 2018"><a name="5.8.2">Version 5.8.2 - January 30, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span> Exposed <code translate="no" dir="ltr">admin.firestore.DocumentReference</code> and
<code translate="no" dir="ltr">admin.firestore.DocumentSnapshot</code> types from the Admin SDK typings.</li>
<li><span class="release-fixed"></span> Upgraded Firestore dependency version to 0.11.2. This includes
several bug fixes including a fix in the <code translate="no" dir="ltr">DocumentReference.update()</code>
operation.</li>
</ul>

<h2 id="version_581_-_january_17_2018" data-text="Version 5.8.1 - January 17, 2018"><a name="5.8.1">Version 5.8.1 - January 17, 2018</a></h2>

<ul>
<li><span class="release-fixed"></span>  Upgraded Firestore dependency version from 0.10.0 to 0.11.1.
This includes several bug fixes in Cloud Firestore.</li>
</ul>

<h2 id="version_580_-_january_11_2018" data-text="Version 5.8.0 - January 11, 2018"><a name="5.8.0">Version 5.8.0 - January 11, 2018</a></h2>

<h3 id="initialization" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-feature"></span> The <a href="/docs/reference/admin/node/admin#.initializeApp"><code translate="no" dir="ltr">admin.initializeApp()</code></a>
method can now be invoked without any arguments. This initializes an app
using Google Application Default Credentials, and other
<a href="/docs/reference/admin/node/admin.app.AppOptions"><code translate="no" dir="ltr">AppOptions</code></a> loaded from
the <code translate="no" dir="ltr">FIREBASE_CONFIG</code> environment variable.</li>
</ul>

<h3 id="authentication_34" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the <code translate="no" dir="ltr">jsonwebtoken</code> library to 8.1.0.</li>
</ul>

<h2 id="version_570_-_january_04_2018" data-text="Version 5.7.0 - January 04, 2018"><a name="5.7.0">Version 5.7.0 - January 04, 2018</a></h2>

<h3 id="authentication_35" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#revokeRefreshTokens"><code translate="no" dir="ltr">revokeRefreshTokens()</code></a>
method for revoking refresh tokens issued to a user.</li>
<li><span class="release-feature"></span> The <a href="/docs/reference/admin/node/admin.auth.Auth#verifyIdToken"><code translate="no" dir="ltr">verifyIdToken()</code></a>
method now accepts an optional <code translate="no" dir="ltr">checkRevoked</code> argument, which can be used to
check if a given ID token has been revoked.</li>
</ul>

<h2 id="version_560_-_december_21_2017" data-text="Version 5.6.0 - December 21, 2017"><a name="5.6.0">Version 5.6.0 - December 21, 2017</a></h2>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.instanceId"><code translate="no" dir="ltr">admin.instanceId()</code></a>
API that facilitates deleting instance IDs and associated user data from
Firebase projects.</li>
<li><span class="release-fixed"></span> Updated the TypeScript typings for <code translate="no" dir="ltr">admin.AppOptions</code> to reflect the
introduction of the <code translate="no" dir="ltr">projectId</code> option.</li>
<li><span class="release-fixed"></span> Removed some unused third party dependencies.</li>
</ul>

<h2 id="version_551_-_november_21_2017" data-text="Version 5.5.1 - November 21, 2017"><a name="5.5.1">Version 5.5.1 - November 21, 2017</a></h2>

<h3 id="cloud_firestore_6" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client to the latest available
version, which adds input validation to several operations, and retry logic
to handle network errors.</li>
</ul>

<h3 id="realtime-database_14" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue in the TypeScript typings of the Realtime Database API.</li>
</ul>

<h2 id="version_550_-_november_10_2017" data-text="Version 5.5.0 - November 10, 2017"><a name="5.5.0">Version 5.5.0 - November 10, 2017</a></h2>

<h3 id="realtime-database_15" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-feature"></span> <a href="/docs/reference/admin/node/admin.app.App#database"><code translate="no" dir="ltr">app.database()</code></a>
method now optionally accepts a database URL. This feature can be used to
access multiple Realtime Database instances from the same app.</li>
<li><span class="release-fixed"></span> Upgraded the Realtime Database client to the latest available
version.</li>
</ul>

<h3 id="cloud_firestore_7" data-text="Cloud Firestore">Cloud Firestore</h3>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client to the latest available
version.</li>
</ul>

<h2 id="version_543_-_october_24_2017" data-text="Version 5.4.3 - October 24, 2017"><a name="5.4.3">Version 5.4.3 - October 24, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Fixed a regression in module loading that prevented using
the Admin SDK in environments like AWS Lambda. This regression was
introduced in the 5.4.0 release, which added a new dependency to Firestore
and gRPC. This fix lazily loads Firestore and gRPC, thus enabling
Admin SDK usage in the affected environments as long as no explicit
attempts are made to use the Firestore API.</li>
</ul>

<h2 id="version_542_-_october_09_2017" data-text="Version 5.4.2 - October 09, 2017"><a name="5.4.2">Version 5.4.2 - October 09, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the Cloud Firestore client dependency to 0.8.2, which
resolves an issue with saving objects with nested document references.</li>
</ul>

<h2 id="version_541_-_october_03_2017" data-text="Version 5.4.1 - October 03, 2017"><a name="5.4.1">Version 5.4.1 - October 03, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Upgraded the Firestore client dependency to 0.8.1, which resolves
the installation issues reported in the Yarn environment.</li>
</ul>

<h2 id="version_540_-_october_03_2017" data-text="Version 5.4.0 - October 03, 2017"><a name="5.4.0">Version 5.4.0 - October 03, 2017</a></h2>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.firestore"><code translate="no" dir="ltr">admin.firestore()</code></a>
API that facilitates accessing <a href="/docs/firestore">Google Cloud Firestore</a>
databases using the
<a href="https://cloud.google.com/nodejs/docs/reference/firestore/latest/"><code translate="no" dir="ltr">@google-cloud/firestore</code></a>
library. See <a href="/docs/firestore/server/setup-node">Set Up Your Node.js App for Cloud Firestore</a>
to get started.</li>
</ul>

<h2 id="version_530_-_september_27_2017" data-text="Version 5.3.0 - September 27, 2017"><a name="5.3.0">Version 5.3.0 - September 27, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> SDK now retries outbound HTTP calls on all low-level I/O errors.</li>
</ul>

<h3 id="authentication_36" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#setCustomUserClaims"><code translate="no" dir="ltr">setCustomUserClaims()</code></a>
method for setting custom claims on user accounts. Custom claims set via this
method become available on the ID tokens of the corresponding users when they
sign in. To learn how to use this API for controlling access to Firebase
resources, see
<a href="/docs/auth/admin/custom-claims">Control Access with Custom Claims and Security Rules</a>.</li>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.auth.Auth#listUsers"><code translate="no" dir="ltr">listUsers()</code></a>
method for listing all the users in a Firebase project in batches.</li>
</ul>

<h3 id="cloud-storage_6" data-text="Cloud Storage">Cloud Storage</h3>

<ul>
<li><span class="release-fixed"></span> Declared a more concrete TypeScript return type (<code translate="no" dir="ltr">Bucket</code>) for the
<a href="/docs/reference/admin/node/admin.storage.Storage#bucket"><code translate="no" dir="ltr">bucket()</code></a> method
in the Cloud Storage API.</li>
</ul>

<h2 id="version_521_-_august_16_2017" data-text="Version 5.2.1 - August 16, 2017"><a name="5.2.1">Version 5.2.1 - August 16, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> A bug in the TypeScript type declarations that come bundled with the
SDK (<code translate="no" dir="ltr">index.d.ts</code>) has been fixed.</li>
</ul>

<h2 id="version_520_-_august_14_2017" data-text="Version 5.2.0 - August 14, 2017"><a name="5.2.0">Version 5.2.0 - August 14, 2017</a></h2>

<ul>
<li><span class="release-feature"></span> A new <a href="/docs/reference/admin/node/admin.storage">Cloud Storage API</a>
that facilitates accessing Google Cloud Storage buckets using the
<a href="https://cloud.google.com/nodejs/docs/reference/storage/2.3.x"><code translate="no" dir="ltr">@google-cloud/storage</code></a>
library.</li>
</ul>

<h3 id="authentication_37" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> New type definitions for the arguments of <code translate="no" dir="ltr">createUser()</code> and
<code translate="no" dir="ltr">updateUser()</code> methods.</li>
</ul>

<h3 id="cloud-messaging_17" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Redefined the arguments of <code translate="no" dir="ltr">sendToDevice()</code> using intersection
instead of overloading.</li>
</ul>

<h2 id="version_510_-_july_25_2017" data-text="Version 5.1.0 - July 25, 2017"><a name="5.1.0">Version 5.1.0 - July 25, 2017</a></h2>

<h3 id="authentication_38" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> Added the method
<a href="/docs/reference/admin/node/admin.auth.Auth#getUserByPhoneNumber"><code translate="no" dir="ltr">getUserByPhoneNumber()</code></a>
to the <a href="/docs/reference/admin/node/admin.auth"><code translate="no" dir="ltr">admin.auth</code></a> interface. This method
enables retrieving user profile information by a phone number.</li>
<li><span class="release-feature"></span> <a href="/docs/reference/admin/node/admin.auth.Auth#createUser"><code translate="no" dir="ltr">createUser()</code></a>
and <a href="/docs/reference/admin/node/admin.auth.Auth#updateUser"><code translate="no" dir="ltr">updateUser()</code></a> methods
now accept a <code translate="no" dir="ltr">phoneNumber</code> property, which can be used to create users with a phone
number field and/or update the phone number associated with a user.</li>
<li><span class="release-feature"></span> Added the <code translate="no" dir="ltr">phoneNumber</code> field to
<a href="/docs/reference/admin/node/admin.auth.UserRecord"><code translate="no" dir="ltr">admin.auth.UserRecord</code></a>,
which exposes the phone number associated with a user account.</li>
<li><span class="release-feature"></span> Added the <code translate="no" dir="ltr">phoneNumber</code> field to
<a href="/docs/reference/admin/node/admin.auth.UserInfo"><code translate="no" dir="ltr">admin.auth.UserInfo</code></a>,
which exposes the phone number associated with a user account by a linked
identity provider.</li>
</ul>

<h2 id="version_501_-_july_12_2017" data-text="Version 5.0.1 - July 12, 2017"><a name="5.0.1">Version 5.0.1 - July 12, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Improved the error messages thrown in the case of network and RPC
errors. These errors now include outgoing HTTP request details that make
it easier to localize and debug issues.</li>
</ul>

<h3 id="authentication_39" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Implemented support in the user management API for handling photo
URLs with special characters.</li>
</ul>

<h2 id="version_500_-_may_17_2017" data-text="Version 5.0.0 - May 17, 2017"><a name="5.0.0">Version 5.0.0 - May 17, 2017</a></h2>

<h3 id="initialization_2" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-fixed"></span> The deprecated <code translate="no" dir="ltr">serviceAccount</code> property in the
<a href="/docs/reference/admin/node/admin.app.AppOptions"><code translate="no" dir="ltr">admin.App.Options</code></a>
type has been removed in favor of the <code translate="no" dir="ltr">credential</code> property.</li>
<li><span class="release-fixed"></span> Initializing the SDK without setting a credential
results in an exception.</li>
<li><span class="release-fixed"></span> Initializing the SDK with a malformed private key string
results in an exception.</li>
</ul>

<h3 id="authentication_40" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> <code translate="no" dir="ltr">createdAt</code> and <code translate="no" dir="ltr">lastSignedInAt</code> properties in
<a href="/docs/reference/admin/node/admin.auth.UserMetadata"><code translate="no" dir="ltr">admin.auth.UserMetadata</code></a>
have been renamed to <code translate="no" dir="ltr">creationTime</code> and <code translate="no" dir="ltr">lastSignInTime</code>. Also these
properties now provide UTC formatted strings instead of <code translate="no" dir="ltr">Date</code> values.</li>
</ul>

<h2 id="version_421_-_april_12_2017" data-text="Version 4.2.1 - April 12, 2017"><a name="4.2.1">Version 4.2.1 - April 12, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Updated the SDK to periodically refresh the OAuth access token
internally used by <code translate="no" dir="ltr">FirebaseApp</code>. This reduces the number of authentication
failures encountered at runtime by SDK components like Realtime Database.</li>
</ul>

<h2 id="version_420_-_april_04_2017" data-text="Version 4.2.0 - April 04, 2017"><a name="4.2.0">Version 4.2.0 - April 04, 2017</a></h2>

<h3 id="cloud-messaging_18" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> Added the methods
<a href="/docs/reference/admin/node/admin.messaging.Messaging#subscribeToTopic"><code translate="no" dir="ltr">subscribeToTopic()</code></a>
and
<a href="/docs/reference/admin/node/admin.messaging.Messaging#unsubscribeFromTopic"><code translate="no" dir="ltr">unsubscribeFromTopic()</code></a>
to the <a href="/docs/reference/admin/node/admin.messaging"><code translate="no" dir="ltr">admin.messaging()</code></a>
service. The new methods allow subscribing to and unsubscribing from FCM
topics via registration tokens.</li>
</ul>

<h2 id="version_414_-_march_28_2017" data-text="Version 4.1.4 - March 28, 2017"><a name="4.1.4">Version 4.1.4 - March 28, 2017</a></h2>

<h3 id="authentication_41" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Cleaned up a number of types to improve the log output, thereby
making debugging easier.</li>
</ul>

<h3 id="realtime-database_16" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue which could cause infinite loops when using <code translate="no" dir="ltr">push()</code>
with no arguments.</li>
</ul>

<h2 id="version_413_-_march_7_2017" data-text="Version 4.1.3 - March 7, 2017"><a name="4.1.3">Version 4.1.3 - March 7, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Fixed incorrect usage of <code translate="no" dir="ltr">undefined</code> - as opposed to <code translate="no" dir="ltr">void</code> - in
several places in the TypeScript typings.</li>
<li><span class="release-fixed"></span> Added missing properties to the TypeScript typings for
<a href="/docs/reference/admin/node/admin.auth.DecodedIdToken"><code translate="no" dir="ltr">DecodedIdToken</code></a>.</li>
<li><span class="release-fixed"></span> Fixed issues when using some types with the TypeScript
<code translate="no" dir="ltr">strictNullChecks</code> option enabled.</li>
<li><span class="release-fixed"></span> Removed incorrect <code translate="no" dir="ltr">admin.Promise</code> type from the TypeScript typings
in favor of the Node.js built-in <code translate="no" dir="ltr">Promise</code> type, which the SDK actually uses.</li>
<li><span class="release-fixed"></span> Added error codes to all app-level errors. All errors in the SDK
now properly implement the
<a href="/docs/reference/admin/node/admin.FirebaseError"><code translate="no" dir="ltr">FirebaseError</code></a> interface.</li>
<li><span class="release-fixed"></span> Improved error handling when initializing the SDK with a credential
that cannot generate valid access tokens.</li>
<li><span class="release-feature"></span> Added new <code translate="no" dir="ltr">admin.database.EventType</code> to the TypeScript typings.</li>
</ul>

<h3 id="realtime-database_17" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Improved how the Realtime Database reports errors when provided with
various types of invalid credentials.</li>
</ul>

<h2 id="version_412_-_march_2_2017" data-text="Version 4.1.2 - March 2, 2017"><a name="4.1.2">Version 4.1.2 - March 2, 2017</a></h2>

<h3 id="authentication_42" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Improved input validation and error messages for all user
management methods.</li>
<li><span class="release-fixed"></span>
<a href="/docs/reference/admin/node/admin.auth.Auth#verifyIdToken"><code translate="no" dir="ltr">verifyIdToken()</code></a>
now works with non-cert credentials, assuming the <code translate="no" dir="ltr">GCLOUD_PROJECT</code> environment
variable is set to your project ID, which is the case when running on Google
infrastructure such as Google App Engine and Google Compute Engine.</li>
</ul>

<h3 id="realtime-database_18" data-text="Realtime Database">Realtime Database</h3>

<ul>
<li><span class="release-fixed"></span> Added <code translate="no" dir="ltr">toJSON()</code> methods to the <code translate="no" dir="ltr">DataSnapshot</code> and <code translate="no" dir="ltr">Query</code> objects
to make them properly JSON-serializable.</li>
</ul>

<h3 id="cloud-messaging_19" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-fixed"></span> Improved response parsing when
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToDevice"><code translate="no" dir="ltr">sendToDevice()</code></a>
and
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToDeviceGroup"><code translate="no" dir="ltr">sendToDeviceGroup()</code></a>
are provided with unexpected inputs.</li>
</ul>

<h2 id="version_411_-_february_14_2017" data-text="Version 4.1.1 - February 14, 2017"><a name="4.1.1">Version 4.1.1 - February 14, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Added in missing TypeScript typings for the <code translate="no" dir="ltr">FirebaseError.toJSON()</code>
method.</li>
</ul>

<h3 id="authentication_43" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed issue with
<a href="/docs/reference/admin/node/admin.auth.Auth#createUser"><code translate="no" dir="ltr">createUser()</code></a>
which sometimes caused multiple users to share the same email.</li>
</ul>

<h2 id="version_410_-_february_2_2017" data-text="Version 4.1.0 - February 2, 2017"><a name="4.1.0">Version 4.1.0 - February 2, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> Added in missing TypeScript typings for the <code translate="no" dir="ltr">toJSON()</code> method off
of several objects.</li>
</ul>

<h3 id="cloud-messaging_20" data-text="Cloud Messaging">Cloud Messaging</h3>

<ul>
<li><span class="release-feature"></span> A new
<a href="/docs/reference/admin/node/admin.messaging"><code translate="no" dir="ltr">admin.messaging()</code></a> service
allows you to send messages through
<a href="/docs/cloud-messaging/admin">Firebase Cloud Messaging</a>. The new service
includes the
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToDevice"><code translate="no" dir="ltr">sendToDevice()</code></a>,
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToDeviceGroup"><code translate="no" dir="ltr">sendToDeviceGroup()</code></a>,
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToTopic"><code translate="no" dir="ltr">sendToTopic()</code></a>,
and
<a href="/docs/reference/admin/node/admin.messaging.Messaging#sendToCondition"><code translate="no" dir="ltr">sendToCondition()</code></a>
methods.</li>
</ul>

<h2 id="version_406_-_january_24_2017" data-text="Version 4.0.6 - January 24, 2017"><a name="4.0.6">Version 4.0.6 - January 24, 2017</a></h2>

<h3 id="initialization_3" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue which caused importing the library via the ES2015
import syntax (<code translate="no" dir="ltr">import * as admin from &quot;firebase-admin&quot;</code>) to not work
properly.</li>
</ul>

<h2 id="version_405_-_january_17_2017" data-text="Version 4.0.5 - January 17, 2017"><a name="4.0.5">Version 4.0.5 - January 17, 2017</a></h2>

<ul>
<li><span class="release-fixed"></span> TypeScript support has been greatly improved. Typings for the
Realtime Database are now available and all other known issues with incorrect or
incomplete type information have been resolved.</li>
</ul>

<h3 id="initialization_4" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue which caused the SDK to appear to hang when provided
with a credential that generated invalid access tokens. The most common cause
of this was using a credential whose access had been revoked. Now, an error
will be logged to the console in this scenario.</li>
</ul>

<h3 id="authentication_44" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> The error message for an <code translate="no" dir="ltr">auth/internal-error</code> error now includes
the raw server response to more easily debug and track down unhandled errors.</li>
<li><span class="release-fixed"></span> Fixed an issue that caused an <code translate="no" dir="ltr">auth/internal-error</code> error to be
thrown when calling
<a href="/docs/reference/admin/node/admin.auth.Auth#getUser"><code translate="no" dir="ltr">getUser()</code></a> or
<a href="/docs/reference/admin/node/admin.auth.Auth#getUserByEmail"><code translate="no" dir="ltr">getUserByEmail()</code></a>
for a user without a creation date.</li>
<li><span class="release-fixed"></span> Fixed an issue which caused an <code translate="no" dir="ltr">auth/internal-error</code> error to be
thrown when calling
<a href="/docs/reference/admin/node/admin.auth.Auth#createUser"><code translate="no" dir="ltr">createUser()</code></a> with
an email that corresponds to an existing user.</li>
<li><span class="release-fixed"></span> Fixed an issue which caused an <code translate="no" dir="ltr">auth/internal-error</code> error to be
thrown when calling Authentication methods with a credential with insufficient
permission. Now, an <code translate="no" dir="ltr">auth/insufficient-permission</code> error will be thrown
instead.</li>
</ul>

<h2 id="version_404_-_december_6_2016" data-text="Version 4.0.4 - December 6, 2016"><a name="4.0.4">Version 4.0.4 - December 6, 2016</a></h2>

<h3 id="authentication_45" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue that caused several Authentication methods to throw
an error when provided with inputs containing Unicode characters.</li>
</ul>

<h2 id="version_403_-_november_21_2016" data-text="Version 4.0.3 - November 21, 2016"><a name="4.0.3">Version 4.0.3 - November 21, 2016</a></h2>

<h3 id="initialization_5" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue that caused a <code translate="no" dir="ltr">null</code> value for the
<code translate="no" dir="ltr">databaseAuthVariableOverride</code> property to be ignored when passed as part
of the first argument to
<a href="/docs/reference/admin/node/admin#.initializeApp"><code translate="no" dir="ltr">initializeApp()</code></a>, which
caused the app to still have full admin access. Now, passing this value has
the expected behavior: the app has unauthenticated access to the
Realtime Database, and behaves as if no user is logged into the app.</li>
</ul>

<h3 id="authentication_46" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-fixed"></span> Fixed an issue that caused an <code translate="no" dir="ltr">auth/invalid-uid</code> error to
be thrown for valid <code translate="no" dir="ltr">uid</code> values passed to several Authentication methods.</li>
</ul>

<h2 id="version_402_-_november_15_2016" data-text="Version 4.0.2 - November 15, 2016"><a name="4.0.2">Version 4.0.2 - November 15, 2016</a></h2>

<ul>
<li><span class="release-feature"></span> Improved error messages throughout the Admin Node.js SDK.</li>
<li><span class="release-fixed"></span> Upgraded dependencies so that the Admin Node.js SDK no longer
throws warnings for using deprecated <code translate="no" dir="ltr">Buffer</code> APIs in Node.js <code translate="no" dir="ltr">7.x.x</code>.</li>
</ul>

<h2 id="version_401_-_november_9_2016" data-text="Version 4.0.1 - November 9, 2016"><a name="4.0.1">Version 4.0.1 - November 9, 2016</a></h2>

<ul>
<li><span class="release-fixed"></span> Fixed issue which caused the <a href="#4.0.0"><code translate="no" dir="ltr">4.0.0</code></a> release to not
include the <code translate="no" dir="ltr">README.md</code> and <code translate="no" dir="ltr">npm-shrinkwrap.json</code> files.</li>
</ul>

<h2 id="version_400_-_november_7_2016" data-text="Version 4.0.0 - November 7, 2016"><a name="4.0.0">Version 4.0.0 - November 7, 2016</a></h2>

<ul>
<li><span class="release-feature"></span> The Admin Node.js SDK (available on npm as <code translate="no" dir="ltr">firebase-admin</code>) is a
new SDK which replaces and expands the admin capabilities of the standard
<code translate="no" dir="ltr">firebase</code> npm module. See
<a href="/docs/admin/setup">Add the Firebase Admin SDK to your Server</a> to get
started.</li>
<li><span class="release-issue"></span> This version does not include the <code translate="no" dir="ltr">README.md</code> and
<code translate="no" dir="ltr">npm-shrinkwrap.json</code> files. This was fixed in version <a href="#4.0.1"><code translate="no" dir="ltr">4.0.1</code></a>.</li>
</ul>

<h3 id="initialization_6" data-text="Initialization">Initialization</h3>

<ul>
<li><span class="release-deprecated"></span> The <code translate="no" dir="ltr">serviceAccount</code> property of the options passed as the
first argument to
<a href="/docs/reference/admin/node/admin#.initializeApp"><code translate="no" dir="ltr">initializeApp()</code></a> has been
deprecated in favor of a new <code translate="no" dir="ltr">credential</code> property. See
<a href="/docs/admin/setup#initialize_the_sdk">Initialize the SDK</a> for more details.</li>
<li><span class="release-feature"></span> The new
<a href="/docs/reference/admin/node/admin.credential#.cert"><code translate="no" dir="ltr">admin.credential.cert()</code></a>
method allows you to authenticate the SDK with a service account key file.</li>
<li><span class="release-feature"></span> The new
<a href="/docs/reference/admin/node/admin.credential#.refreshToken"><code translate="no" dir="ltr">admin.credential.refreshToken()</code></a>
method allows you to authenticate the SDK with a Google OAuth2 refresh token.</li>
<li><span class="release-feature"></span> The new
<a href="/docs/reference/admin/node/admin.credential#.applicationDefault"><code translate="no" dir="ltr">admin.credential.applicationDefault()</code></a>
method allows you to authenticate the SDK with Google Application Default
Credentials.</li>
</ul>

<h3 id="authentication_47" data-text="Authentication">Authentication</h3>

<ul>
<li><span class="release-feature"></span> A new Admin API for managing your Firebase Authentication users is now
available. This API lets you manage your users without using their existing
credentials, and without worrying about client-side rate limiting. The new
methods included in this API are
<a href="/docs/reference/admin/node/admin.auth.Auth#getUser"><code translate="no" dir="ltr">getUser()</code></a>,
<a href="/docs/reference/admin/node/admin.auth.Auth#getUserByEmail"><code translate="no" dir="ltr">getUserByEmail()</code></a>,
<a href="/docs/reference/admin/node/admin.auth.Auth#createUser"><code translate="no" dir="ltr">createUser()</code></a>,
<a href="/docs/reference/admin/node/admin.auth.Auth#updateUser"><code translate="no" dir="ltr">updateUser()</code></a>, and
<a href="/docs/reference/admin/node/admin.auth.Auth#deleteUser"><code translate="no" dir="ltr">deleteUser()</code></a>. See
<a href="/docs/auth/admin/manage-users">Manage Users</a> for more details.</li>
<li><span class="release-changed"></span> The
<a href="/docs/reference/admin/node/admin.auth.Auth#createCustomToken"><code translate="no" dir="ltr">createCustomToken()</code></a>
method is now asynchronous, returning a <code translate="no" dir="ltr">Promise&lt;string&gt;</code> instead of a
<code translate="no" dir="ltr">string</code>.</li>
</ul>


</div>

  
  

  
</div>

  

  
    
      <devsite-recommendations display="in-page" hidden yield>
      </devsite-recommendations>
    
    
      
    <devsite-thumb-rating position="footer">
    </devsite-thumb-rating>
  
       
         <devsite-feedback
  position="footer"
  project-name="Firebase"
  product-id="719752"
  bucket=""
  context=""
  version="t-devsite-webserver-20230725-r01-rc00.453786329912420857"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="footer"
  class="nocontent"
  
  
    project-feedback-url="https://firebase.google.com/support/contact/bugs-features/"
  
  
    
      project-icon="https://firebase.google.com/_static/firebase/images/icon.svg"
    
  
  
    project-support-url="https://firebase.google.com/support/"
  
  feedback-type="thumb-rating">

  <button>
  
    
    Send feedback
  
  </button>
</devsite-feedback>
       
    
    
      <devsite-recommendations id="recommendations-link" yield></devsite-recommendations>
    
  

  
  
</article>


<devsite-content-footer class="nocontent">
  <p>Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 License</a>, and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>. For details, see the <a href="https://developers.google.com/site-policies">Google Developers Site Policies</a>. Java is a registered trademark of Oracle and/or its affiliates.</p>
  <p>Last updated 2023-07-13 UTC.</p>
</devsite-content-footer>


<devsite-notification
>
</devsite-notification>


  
<div class="devsite-content-data">
  <template class="devsite-thumb-rating-down-categories">
  [{
      "type": "thumb-down",
      "id": "missingTheInformationINeed",
      "label":"Missing the information I need"
    },{
      "type": "thumb-down",
      "id": "tooComplicatedTooManySteps",
      "label":"Too complicated / too many steps"
    },{
      "type": "thumb-down",
      "id": "outOfDate",
      "label":"Out of date"
    },{
      "type": "thumb-down",
      "id": "samplesCodeIssue",
      "label":"Samples / code issue"
    },{
      "type": "thumb-down",
      "id": "otherDown",
      "label":"Other"
    }]
  </template>
  <template class="devsite-thumb-rating-up-categories">
  [{
      "type": "thumb-up",
      "id": "easyToUnderstand",
      "label":"Easy to understand"
    },{
      "type": "thumb-up",
      "id": "solvedMyProblem",
      "label":"Solved my problem"
    },{
      "type": "thumb-up",
      "id": "otherUp",
      "label":"Other"
    }]
  </template>
  
    
    
    <template class="devsite-thumb-rating-feedback">
      <devsite-feedback
  position="thumb-rating"
  project-name="Firebase"
  product-id="719752"
  bucket=""
  context=""
  version="t-devsite-webserver-20230725-r01-rc00.453786329912420857"
  data-label="Send Feedback Button"
  track-type="feedback"
  track-name="sendFeedbackLink"
  track-metadata-position="thumb-rating"
  class="nocontent"
  
  
    project-feedback-url="https://firebase.google.com/support/contact/bugs-features/"
  
  
    
      project-icon="https://firebase.google.com/_static/firebase/images/icon.svg"
    
  
  
    project-support-url="https://firebase.google.com/support/"
  
  feedback-type="thumb-rating">

  <button>
  
    Need to tell us more?
  
  </button>
</devsite-feedback>
    </template>
  
</div>
            
          </devsite-content>
        </main>
        <devsite-footer-promos class="devsite-footer">
          
            
          
        </devsite-footer-promos>
        <devsite-footer-linkboxes class="devsite-footer">
          
            
<nav class="devsite-footer-linkboxes nocontent" aria-label="Footer links">
  
  <ul class="devsite-footer-linkboxes-list">
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Learn</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/docs/guides/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Guides
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/docs/reference/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Reference
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/docs/samples/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Samples
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/docs/libraries/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Libraries
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//github.com/firebase/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
              
              
            
          
            GitHub
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Stay connected</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//firebase.googleblog.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Blog
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/summit/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Firebase Summit
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//twitter.com/Firebase"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Twitter
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//www.youtube.com/user/Firebase"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
              
              
            
          
            YouTube
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
    <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading no-link">Support</h3>
      <ul class="devsite-footer-linkbox-list">
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/support/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 1)"
            >
            
          
            Contact support
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//stackoverflow.com/questions/tagged/firebase"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 2)"
            >
            
          
            Stack Overflow
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//firebase.community/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 3)"
            >
            
          
            Slack community
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="//groups.google.com/forum/#!forum/firebase-talk"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 4)"
            >
            
          
            Google group
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/support/releases"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 5)"
            >
            
          
            Release notes
          
          </a>
          
          
        </li>
        
        <li class="devsite-footer-linkbox-item">
          
          <a href="/support/faq/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
            
             data-label="Footer Link (index 6)"
            >
            
              
              
            
          
            FAQs
          
          </a>
          
          
        </li>
        
      </ul>
    </li>
    
  </ul>
  
</nav>
          
        </devsite-footer-linkboxes>
        <devsite-footer-utility class="devsite-footer">
          
            

<div class="devsite-footer-utility nocontent">
  
  
  <nav class="devsite-footer-sites" aria-label="Other Google Developers websites">
    <a href="https://developers.google.com/"
       class="devsite-footer-sites-logo-link gc-analytics-event"
       data-category="Site-Wide Custom Events"
       data-label="Footer Google Developers Link">
      <picture>
        <source srcset="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/lockup-google-for-developers-dark-theme.svg"
                media="(prefers-color-scheme: none)"
                class="devsite-dark-theme"
                loading="lazy"
                alt="Google Developers">
        <img class="devsite-footer-sites-logo"
             src="https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/lockup-google-for-developers.svg"
             loading="lazy"
             alt="Google Developers">
      </picture>
    </a>
    <ul class="devsite-footer-sites-list">
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.android.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Android Link"
         
         >
          Android
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//developer.chrome.com/home"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Chrome Link"
         
         >
          Chrome
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//firebase.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Firebase Link"
         
         >
          Firebase
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//cloud.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer Google Cloud Platform Link"
         
         >
          Google Cloud Platform
        </a>
      </li>
      
      <li class="devsite-footer-sites-item">
        <a href="//developers.google.com/products/"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
         
           data-label="Footer All products Link"
         
         >
          All products
        </a>
      </li>
      
    </ul>
  </nav>
  

  
  <nav class="devsite-footer-utility-links" aria-label="Utility links">
    
    <ul class="devsite-footer-utility-list">
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/terms/"
           data-category="Site-Wide Custom Events"
           data-label="Footer Terms link"
         >
          Terms
        </a>
        
      </li>
      
      <li class="devsite-footer-utility-item
                 ">
        
        
        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//policies.google.com/privacy"
           data-category="Site-Wide Custom Events"
           data-label="Footer Privacy link"
         >
          Privacy
        </a>
        
      </li>
      
    </ul>
    
    
<devsite-language-selector>
  <ul role="presentation">
    
    
    <li role="presentation">
      <a role="menuitem" lang="en"
        
          aria-current="true">English</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="id"
        >Bahasa Indonesia</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="es_419"
        >Español – América Latina</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="pt_br"
        >Português – Brasil</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="zh_cn"
        >中文 – 简体</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ja"
        >日本語</a>
    </li>
    
    <li role="presentation">
      <a role="menuitem" lang="ko"
        >한국어</a>
    </li>
    
  </ul>
</devsite-language-selector>

  </nav>
</div>
          
        </devsite-footer-utility>
        <devsite-panel></devsite-panel>
        
      </section></section>
    <devsite-sitemask></devsite-sitemask>
    <devsite-snackbar
    
    >
</devsite-snackbar>
    <devsite-tooltip ></devsite-tooltip>
    <devsite-heading-link></devsite-heading-link>
    <devsite-analytics analytics-iframe enable-ga4>
      
        <script type="application/json" analytics>[]</script>
<script type="application/json" tag-management gtm>{&#34;ga4&#34;: [], &#34;ga4p&#34;: [], &#34;gtm&#34;: [&#34;GTM-N84485&#34;], &#34;parameters&#34;: {&#34;internalUser&#34;: &#34;False&#34;, &#34;language&#34;: {&#34;machineTranslated&#34;: &#34;False&#34;, &#34;requested&#34;: &#34;en&#34;, &#34;served&#34;: &#34;en&#34;}, &#34;pageType&#34;: &#34;article&#34;, &#34;projectName&#34;: &#34;Firebase&#34;, &#34;signedIn&#34;: &#34;True&#34;, &#34;tenant&#34;: &#34;firebase&#34;, &#34;recommendations&#34;: {&#34;sourcePage&#34;: &#34;&#34;, &#34;sourceType&#34;: 0, &#34;sourceRank&#34;: 0, &#34;sourceIdenticalDescriptions&#34;: 0, &#34;sourceTitleWords&#34;: 0, &#34;sourceDescriptionWords&#34;: 0, &#34;experiment&#34;: &#34;&#34;}, &#34;experiment&#34;: {&#34;ids&#34;: &#34;&#34;}}, &#34;tags&#34;: [&#34;GTM-N84485&#34;]}</script>
      
    </devsite-analytics>
    
      <devsite-badger></devsite-badger>
    
    <firebase-gtm></firebase-gtm>
    <script nonce="fHNb6IZ8nGhzHesdROIUdE1VSkoLii">
  
  (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
    t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
    E.parentNode.insertBefore(t,E);})(window, document, 'script',
    'https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/js/app_loader.js', '[4,"en",null,"/js/devsite_app_module.js","https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3","https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase","https://firebase-dot-devsite-v2-prod.appspot.com",null,null,["/_pwa/firebase/manifest.json","https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/favicon.png","https://www.gstatic.com/devrel-devsite/prod/vd0b6a72e157acde26de95ec0a4f3c963ef89b26016c053f67be2964730c81ac3/firebase/images/lockup.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700&display=swap"],1,null,[1,6,8,12,14,17,21,25,40,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,111,112,113,115,116,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,144,147,148,149,150,151,152,154,155,156,157,158,159,161,163,164,165,168,169,170,172,173,179,180,182,183,186,190,191,193,196],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","firebase.google.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ_7QMeLCRY20bh_SXdAYqy70KY",null,null,null,["Search__enable_devsite_serp","Badges__enable_hide_badges","Cloud__enable_cloud_facet_chat","Profiles__enable_suggested_interests","AuthorPageInsights__enable_author_page_insights","Profiles__enable_release_notes_notifications","Profiles__enable_developer_profiles_callout","BookNav__enable_collapsible_book_nav","Cloud__enable_free_trial_server_call","Badges__enable_drag_and_drop_badges","Search__enable_faceted_search","Profiles__require_profile_eligibility_for_signin","Analytics__enable_ga4_analytics","Search__enable_page_map","Significatio__enable_experiment_id_caching","Experiments__enable_experiments","Cloud__enable_cloud_shell_fte_user_flow","Profiles__enable_profile_communities","Search__enable_suggestions_from_borg","Profiles__enable_developer_profiles_dashboard_recommendations","Profiles__enable_public_developer_profiles","Significatio__enable_by_tenant","Experiments__reqs_query_experiments","MiscFeatureFlags__devpanel_url","MiscFeatureFlags__developers_footer_image","Profiles__enable_profile_collections","Profiles__enable_page_saving","Significatio__enable_footprints","MiscFeatureFlags__developers_footer_dark_image","Cloud__enable_cloud_dlp_service","Cloud__enable_cloud_shell","Localization__enable_locale_redirects","SignIn__enable_auto_signin_oauth","Search__enable_acl_suggestions","Profiles__enable_profile_notifications_ui","BookNav__enable_book_nav_filtering","MiscFeatureFlags__enable_tls_version_for_gaia_calls","Badges__enable_delete_badges","Profiles__enable_developer_profiles_interests","Profiles__enable_searchable_interests","MiscFeatureFlags__emergency_css","Cloud__enable_cloudx_experiment_ids","Cloud__enable_cloudx_ping","Search__enable_dynamic_content_confidential_banner"],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT_kCVE","https://developerscontentserving-pa.clients6.google.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.clients6.google.com",1]')
  
</script>
    <devsite-a11y-announce></devsite-a11y-announce>
  </body>
</html>`;

// Create a DOM from the HTML content
let dom = new JSDOM(htmlContent);

// Extract all the links
let allLinks = dom.window.document.querySelectorAll('a');

let linkData = [];
for (let link of allLinks) {
  linkData.push({
    href: link.href,
    text: link.textContent.trim()
  });
}

// Regular expression to match version info
let versionPattern = /Version ([\d\.]+) - /;

let versionLinks = linkData.filter(link => versionPattern.test(link.text)).map(link => {
  let versionMatch = link.text.match(versionPattern);
  return {
    href: link.href,
    version: versionMatch[1]
  };
});

// Identify the latest version
let latestVersion = versionLinks.reduce((prev, curr) => {
  let prevVersionNumbers = prev.version.split('.').map(num => parseInt(num));
  let currVersionNumbers = curr.version.split('.').map(num => parseInt(num));
  for (let i = 0; i < prevVersionNumbers.length; i++) {
    if (currVersionNumbers[i] > prevVersionNumbers[i]) {
      return curr;
    }
  }
  return prev;
}).version;

// Filter links for versions 9.0.2 to latest
let relevantLinks = versionLinks.filter(link => {
  let versionNumbers = link.version.split('.').map(num => parseInt(num));
  return versionNumbers[0] > 9 || (versionNumbers[0] === 9 && versionNumbers[1] > 0) || (versionNumbers[0] === 9 && versionNumbers[1] === 0 && versionNumbers[2] >= 2);
});

// Log the relevant links
console.log(relevantLinks);
