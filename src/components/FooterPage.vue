<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2025 My Company</p>
      </div>
      <div class="footer-center">
        <p>Privacy Policy | Terms of Service</p>
      </div>
      <div class="footer-right">
        <p>Follow us:</p>
        <a href="#" class="social-icon">Facebook</a>
        <a href="#" class="social-icon">Twitter</a>
        <a href="#" class="social-icon">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  width: 100%;
  position: sticky;
  bottom: 0;
}


.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
}

.footer-left,
.footer-center,
.footer-right {
  flex: 1;
  padding: 10px;
  margin: 5px;
}

.footer-left p,
.footer-center p,
.footer-right p {
  margin: 0;
}

.footer-right {
  text-align: right;
}

.social-icon {
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
}

.social-icon:hover {
  color: #f1c40f;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    text-align: center;
    flex: 1 1 100%;
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 10px;
  }

  .social-icon {
    margin-left: 5px;
  }
}
</style>
