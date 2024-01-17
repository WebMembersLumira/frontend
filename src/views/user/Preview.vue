<template>
  <div>
    <p>test</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    async fetchNote() {
      try {
        const response = await axios.get(
          `https://10.11.10.243/backend/public/api/auth/notes-user/${this.user_id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.note = response.data.data.length;
      } catch (error) {
        console.error(error);
        const data = JSON.stringify(error.message);
        localStorage.setItem("error", data);
      }
    },
  },
  created() {
    this.fetchNote();
  },
};
</script>
