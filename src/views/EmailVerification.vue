<template>
  <div>
    <h1>Email Verification</h1>
    <p>Please wait while we verify your email address...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.verifyEmail();
  },
  methods: {
    async verifyEmail() {
      try {
        const response = await this.$axios.get(`/api/email/verify/${this.$route.params.id}`);
        this.$router.push('/login'); // Redirect to login page after successful verification
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
