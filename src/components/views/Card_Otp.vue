<template>
    <div class="container">
      <div class="card-details">
        <div class="card">
          <div class="card-header">RABBITLALA</div>
          <div class="card-number">876* **** **** *329</div>
          <div class="card-holder">Card Holder Name</div>
        </div>
        <p>Enter your OTP to establish a secure connection.</p>
        <div class="otp-inputs">
          <input type="text" v-for="(digit, index) in otp" :key="index" v-model="otp[index]" maxlength="1" />
        </div>
        <button class="proceed-btn">PROCEED</button>
        <p class="secured">Secured by RabbitLala Quantum Locks 🔒</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otp: ["", "", "", "", "", ""]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1e1e1e;
    padding: 1rem;
  }
  
  .card-details {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    max-width: 350px;
    width: 100%;
  }
  
  .card {
    background: linear-gradient(135deg, #00a47a, #29cc91);
    color: white;
    padding: 1rem;
    border-radius: 10px;
  }
  
  .card-header {
    font-weight: bold;
  }
  
  .card-number {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .card-holder {
    font-size: 0.9rem;
  }
  
  .otp-inputs {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 1rem 0;
  }
  
  .otp-inputs input {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .proceed-btn {
    background-color: #0078d4;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .proceed-btn:hover {
    background-color: #005fa3;
  }
  
  .secured {
    font-size: 0.8rem;
    margin-top: 10px;
  }
  
  @media (max-width: 400px) {
    .otp-inputs input {
      width: 35px;
      height: 35px;
    }
  }
  </style>
  