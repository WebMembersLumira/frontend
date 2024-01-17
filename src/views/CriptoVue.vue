<template>
  <div>
    <button @click="generateUniqueValue">Generate Unique Value</button>
    <p>Unique Value: {{ uniqueValue }}</p>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default {
  data() {
    return {
      uniqueValue: '',
    };
  },
  methods: {
    async generateUniqueValue() {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const ipAddress = response.data.ip;
        const userAgent = navigator.userAgent;

        const uniqueString = `${ipAddress}${userAgent}`;
        const hashedValue = CryptoJS.SHA256(uniqueString).toString();

        this.uniqueValue = hashedValue;
      } catch (error) {
        console.error('Error getting IP address:', error);
      }
    },
  },
};
</script>
