<template>
  <div class="container">
    <h2>My Cards - Card Details</h2>
    <div class="card-container">
      <div class="card">
        <div class="card-header">RABBITLALA</div>
        <div class="card-number">{{ maskedCardNumber }}</div>
        <div class="card-holder">Card Holder Name</div>
      </div>
      <div class="card-details">
        <label>Card Name</label>
        <input v-model="cardName" type="text" placeholder="Enter Card Name" />
        
        <label>Card Number</label>
        <input v-model="cardNumber" type="text" @input="formatCardNumber" placeholder="Enter Card Number" />
        
        <label>Exp. Date</label>
        <input v-model="expiryDate" type="text" placeholder="MM/YY" />
        
        <label>CVV</label>
        <input v-model="cvv" type="password" placeholder="CVV" />
      </div>
      <button class="proceed-btn">PROCEED</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardName: "Haroke Kakoshi",
      cardNumber: "",
      expiryDate: "12/29",
      cvv: "",
    };
  },
  computed: {
    maskedCardNumber() {
      const visibleStart = "876*";
      const visibleEnd = "*329";
      return this.cardNumber.replace(/\d(?=\d{8})/g, "*").replace(/^.{4}/, visibleStart).replace(/.{4}$/, visibleEnd);
    },
  },
  methods: {
    formatCardNumber() {
      this.cardNumber = this.cardNumber.replace(/[^0-9]/g, "").slice(0, 16);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  width: 90%;
  max-width: 450px;
  margin: auto;
}
.card-container {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.card {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  padding: 15px;
  border-radius: 8px;
  color: white;
  text-align: center;
}
.card-header {
  font-size: 18px;
  font-weight: bold;
}
.card-number {
  font-size: 20px;
  margin: 10px 0;
}
.card-holder {
  font-size: 14px;
}
.card-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.card-details label {
  font-weight: bold;
}
.card-details input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.proceed-btn {
  width: 100%;
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
}
@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card {
    width: 100%;
  }
  .card-details {
    width: 100%;
  }
}
</style>
