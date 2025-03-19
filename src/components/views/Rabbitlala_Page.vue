<template>
  <div class="card-details-container">
    <h2 style="color: #000000">Card Details</h2>
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
      <div class="card-info">
        <!-- <div class="input-field">
          <label>Card Name</label>
          <input type="text" value="Hatake Kakashi" />
        </div> -->
        <div class="input-field">
          <div class="input-container">
            <label for="card_name" class="input-label"
              >Card Name <span class="login-danger">*</span></label
            >
            <input
              type="text"
              id="card_name"
              class="input-field"
              placeholder="Hatake Kakashi"
            />
          </div>
        </div>
        <div class="input-field">
          <div class="input-container">
            <label for="card_number" class="input-label"
              >Card Number <span class="login-danger">*</span></label
            >
            <input
              id="card_number"
              class="input-field"
              type="text"
              v-model="cardNumber"
              @input="formatCardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              maxlength="19"
            />
          </div>
        </div>
        <div class="input-group">
          <div class="input-field">
            <div class="input-container">
              <label for="exp_date" class="input-label"
                >Exp. Date <span class="login-danger">*</span></label
              >
              <input
                id="exp_date"
                class="input-field"
                type="text"
                v-model="expDate"
                placeholder="10/28"
                maxlength="5"
              />
            </div>
          </div>
          <div class="input-field">
            <div class="input-container">
              <label for="cvv" class="input-label"
                >CVV <span class="login-danger">*</span></label
              >
              <input
                id="exp_date"
                class="input-field"
                type="password"
                v-model="cvv"
                placeholder="***"
                maxlength="3"
              />
            </div>
          </div>
        </div>
        <button
          class="proceed-btn"
          @click="
            $router.push({
              name: 'Card_Pin',
              params: { cardNumber: encodeURIComponent(cardNumber) },
            })
          "
        >
          PROCEED
          <i class="fas fa-lock"></i>
        </button>

        <div class="secure_text_container">
          <p class="secure-text">Secured by RabbitLala Quantum Locks</p>
          <div class="image_container">
            <img
              :src="require('@/assets/colored_logo.png')"
              alt=""
              style="width: 20px; height: 15px"
            />
          </div>
          <i class="fas fa-lock"></i>
        </div>
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
    };
  },
  computed: {
    maskedCardNumber() {
      let digits = this.cardNumber.replace(/\s/g, ""); // Remove spaces
      return digits
        .split("")
        .map((char, index) => (index < 3 || index > 12 ? char : "*")) // Mask middle digits
        .join("")
        .replace(/(.{4})/g, "$1 ") // Re-add spaces
        .trim();
    },
  },
  methods: {
    formatCardNumber() {
      this.cardNumber = this.cardNumber
        .replace(/\D/g, "") // Remove non-numeric characters
        .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
        .trim()
        .substring(0, 19); // Limit to 19 characters (16 digits + 3 spaces)
    },
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

.local-forms.input-block {
  margin-top: 2%;
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

/* .card {
  background: linear-gradient(135deg, #0f85a1, #01a880);
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  color: white;
  position: relative;
} */

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

/* .input-field {
  width: 100%;
  margin-bottom: 10px;
} */

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
.secure_text_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  padding: 10px;
}

.secure-text {
  font-size: 14px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
}

.fa-lock {
  color: #0061a2;
  font-size: 16px;
  margin-top: -1%;
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

/* STYLING FOR THE ANT DESIGN INPUT FIELD */
.input-container {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.input-label {
  position: absolute;
  top: -10px;
  left: 10px;
  background: white;
  padding: 0 5px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s;
  margin-bottom: 10px;
}

.input-field:focus {
  border-color: #5b9bd5;
}
/* STYLING FOR THE ANT DESIGN INPUT FIELD ENDS HERE*/
</style>
