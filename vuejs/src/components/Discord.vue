<template>
    <div class="unifiedauth_div">
      <a v-for="auth in authintegrations" 
         :key="auth.type"
         :href="`https://api.unified.to/unified/integration/login/6632833c61d03806648fecad/${auth.type}?redirect=true&env=Sandbox`"
         :title="`Sign-in with ${auth.name}`" 
         class="unified_button">
        <div class="unified_logo_link">
          <img :src="auth.logo_url" class="unified_logo_img" alt="Logo" />
        </div>
        <div class="unified_text_link">
          Sign-in with {{ auth.name }}
        </div>
      </a>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'Discord',
    data() {
      return {
        authintegrations: []
      };
    },
    mounted() {
      this.fetchAuthIntegrations();
    },
    methods: {
      fetchAuthIntegrations() {
        const url = 'https://api.unified.to/unified/integration/workspace/6632833c61d03806648fecad?categories=auth&active=true&summary=true&env=Sandbox';
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.authintegrations = data;
        })
          .catch(error => {
            console.error('Error fetching auth integrations:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .unifiedauth_div {
      display: flex;
      flex-wrap: wrap;
      grid-column-gap: 0;
  }
  
  .unifiedauth_div a.unified_button {
      width: 180px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-decoration: none;
      background-color: #ffffff;
      margin-bottom: 10px;
      border: 1px solid #c2c8d0;
      border-radius: 6px;
      padding: 8px 8px 8px 8px;
      align-items: center;
      user-select: none;
  }
  
  .unifiedauth_div a.unified_button:hover {
      background-color: #eeeeee !important;
      border-color: #c2c8d0;
  }
  
  .unifiedauth_div .unified_logo_link {
      width: auto;
      margin-right: 10px;
  }
  
  .unifiedauth_div .unified_logo_img {
      vertical-align: middle;
      height: 16px;
      width: 16px;
  }
  
  .unifiedauth_div .unified_text_link {
      font-size: inherit;
      color: #222222;
  }
  
  .unifiedauth_div .unified_button:hover .unified_text_link {
      color: #000000;
  }
  </style>
  