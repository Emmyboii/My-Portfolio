const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

if (window.Typed) {
  new Typed('#text-typing', {
    strings: ['A Frontend Developer', 'A Backend Developer', 'A Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("jotform");
  const submitBtn = document.getElementById("submitBtn");

  function showToast(message, isError = false) {
    const toast = document.getElementById("custom-toast");
    toast.textContent = message;
    toast.style.backgroundColor = isError ? "#dc3545" : "#28a745"; // red for error, green for success
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.display = "none";
    }, 3000); // Toast disappears after 3 seconds
  }

  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', function (e) {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 11);
    e.target.value = cleaned;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const jotformURL = 'https://submit.jotform.com/submit/251642652527054/';
    const formData = new FormData();

    formData.append('q3_name[first]', firstName);
    formData.append('q3_name[last]', lastName);
    formData.append('q4_email', email);
    formData.append('q5_phoneNumber[full]', phone);
    formData.append('q6_message', message);

    try {
      await fetch(jotformURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      showToast("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      showToast("Failed to submit. Please check your connection.", true);
      console.error("Submit error:", error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});