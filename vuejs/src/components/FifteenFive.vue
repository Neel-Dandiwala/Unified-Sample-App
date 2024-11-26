<template>
  <UnifiedDirectory workspace_id="6632833c61d03806648fecad" environment="Sandbox" success_redirect="http://localhost:5173/success"  failure_redirect="http://localhost:5173/failure" notabs/>
</template>

<script lang="ts">
/* TODO: npm install @unified-api/vuejs-directory -P */
import UnifiedDirectory from '@unified-api/vuejs-directory';

export default {
  components: { UnifiedDirectory },
};
</script>