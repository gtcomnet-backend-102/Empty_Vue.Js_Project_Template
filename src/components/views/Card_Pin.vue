<template>
  <div class="card-details-container">
    <h2 style="color: #000000">Enter Card Pin</h2>
    <div class="card-details">
      <div class="card-preview">
        <div class="card">
          <div class="card-header">
            <h4>RABBITLALA</h4>
            <div class="image_container">
              <img
                :src="require('@/assets/White Rabbitlala Logo.png')"
                alt=""
              />
            </div>
          </div>
          <div class="chip">
            <div class="arrow_left">
              <img :src="require('@/assets/Vector.png')" alt="" />
            </div>
            <img :src="require('@/assets/plastic-chip.png')" alt="" />
          </div>
          <!-- Card Number Display -->
          <div class="card-number">{{ maskedCardNumber }}</div>
          <div class="card-holder">Card Holder Name</div>
        </div>
      </div>
      <div>
        <p style="color: #000000">
          Enter your Pin to establish a secure connection.
        </p>
      </div>
      <div class="pin-container">
        <input
          v-for="(digit, index) in pin"
          :key="index"
          v-model="pin[index]"
          type="text"
          maxlength="1"
          class="pin-input"
          @input="moveToNext(index)"
          @keydown.backspace="moveToPrev(index)"
          ref="pinInputs"
        />
      </div>
      <div class="card-info">
        <button class="proceed-btn">
          PROCEED
          <i class="fas fa-lock"></i>
        </button>
        <p class="secure-text">
          Secured by RabbitLala Quantum Locks
          <i class="fas fa-lock" style="color: #0061a2"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetailsPage",

  data() {
    return {
      cardNumber: "",
      pin: ["", "", "", ""], // PIN array
    };
  },

  computed: {
    // maskedCardNumber() {
    //   const cardNumber = decodeURIComponent(this.$route.params.cardNumber);

    //   return `**** **** **** ${cardNumber.slice(-4)}`;
    // },
    maskedCardNumber() {
      let digits = decodeURIComponent(this.$route.params.cardNumber).replace(
        /\s/g,
        ""
      ); // Remove spaces
      return digits
        .split("")
        .map((char, index) => (index < 3 || index > 12 ? char : "*")) // Mask middle digits
        .join("")
        .replace(/(.{4})/g, "$1 ") // Re-add spaces
        .trim();
    },
  },

  methods: {
    moveToNext(index) {
      if (this.pin[index] && index < this.pin.length - 1) {
        this.$refs.pinInputs[index + 1].focus();
      }
    },
    moveToPrev(index) {
      if (!this.pin[index] && index > 0) {
        this.$refs.pinInputs[index - 1].focus();
      }
    },
    formatCardNumber() {
      this.cardNumber = this.cardNumber
        .replace(/\D/g, "") // Remove non-numeric characters
        .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
        .trim()
        .substring(0, 19); // Limit to 19 characters (16 digits + 3 spaces)
    },
  },

  mounted() {
    const cardNumber = decodeURIComponent(this.$route.params.cardNumber);
    console.log(cardNumber);
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
.image_container {
  width: 22px;
  height: 24px;
}
.card-number {
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-details-container {
  background: #ffffff;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.card-details {
  background: #f4f4f4;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
}

.card-preview {
  background: white;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card {
  background-image: url("/public/Card.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  color: white;
  position: relative;
}

.card-header h4 {
  font-weight: bold;
  margin-top: -1%;
  font-size: 24px;
}

.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
}
.arrow_left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chip {
  display: flex;
  flex-direction: row;
  gap: 6px;
  height: 50px;
  margin-bottom: 50px;
}

.card-holder {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  color: #666;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color: black;
}

.input-group {
  display: flex;
  gap: 20px;
}

.proceed-btn {
  width: 100%;
  padding: 10px;
  background: #0061a2;
  color: white;
  border: none;
  border-radius: 8px;
  /* cursor: not-allowed; */
  margin-top: 10px;
}

.secure-text {
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-top: 40px;
}

.card-info{
  width:100%;
}

@media (max-width: 480px) {
  .card-details {
    width: 100%;
    padding: 15px;
  }
  .input-group {
    flex-direction: column;
  }
}

/* STYLING FOR THE PIN DESIGN STARTS HERE */
.pin-container {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
}

.pin-input {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  border: 2px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;
}

.pin-input:focus {
  border-color: #4a90e2;
}
/* STYLING FOR THE PIN DESIGN ENDS HERE*/
</style>
