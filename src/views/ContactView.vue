<template>
  <div>
    <header class="hero h2ml">
      <div class="hero-content">
        <h1>Contact</h1>
        <p>Transform your mortgage business with XtremeMortgageWorx. 
           Schedule a demo to discover how we can elevate your success.</p>
      </div>
    </header>
    <div class="main-grid">
      <div class="tooright form-container animate-up">
        <h2 class="form-title">Request Your Demo</h2>
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">First Name*</label>
              <input type="text" v-model="form.firstName" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Last Name*</label>
              <input type="text" v-model="form.lastName" class="form-input" required>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Email*</label>
              <input type="email" v-model="form.email" class="form-input" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone*</label>
              <input type="tel" v-model="form.phone" class="form-input" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea v-model="form.message" class="form-input" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Submit Request' }}
          </button>
        </form>
      </div>
      <div class="contact-section">
        <div class="contact-card animate-up">
          <h3>Get in Touch</h3>
          <div class="contact-info">
            <div class="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h4>Phone</h4>
              <p>866.855.5070</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h4>Email</h4>
              <p>info@xtrememortgageworx.com</p>
            </div>
          </div>
        </div>
        <div class="contact-card animate-up">
          <h3>Connect With Us</h3>
          <div class="social-icons">
            <!-- Add social icons with appropriate SVGs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  name: 'ContactView',
  setup() {
    const schema = yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      message: yup.string()
    });

    const { handleSubmit, errors } = useForm({
      validationSchema: schema
    });

    const { value: firstName } = useField('firstName');
    const { value: lastName } = useField('lastName');
    const { value: email } = useField('email');
    const { value: phone } = useField('phone');
    const { value: message } = useField('message');
    const isSubmitting = ref(false);

    const onSubmit = async (values) => {
      isSubmitting.value = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', values);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      form: {
        firstName,
        lastName,
        email,
        phone,
        message
      },
      errors,
      isSubmitting,
      handleSubmit: handleSubmit(onSubmit)
    };
  }
};
</script>

<style>
  @mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
      (-0.5+ (random()) * 3) +
        em
        (-0.5+ (random()) * 3) +
        em
        7px
        if(
          $i % 4 == 0,
          oklch(50% 0.02 262.9),
          if(
            $i % 4 == 1,
            oklch(60% 0.02 262.9),
            if($i % 4 == 2, oklch(45% 0.02 262.9), oklch(55% 0.02 262.9))
          )
        );
  }
  text-shadow: $text-shadow;
}
* {
  scroll-behavior: smooth !important;
}

.h2ml::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.15;
  pointer-events: none;
  mix-blend-mode: soft-light;
}

.tooright,
head {
  display: block;
  font-size: 52px;
  color: transparent;
}

.blow::before,
head::after,
.tooright::before,
.tooright::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: ".";
  mix-blend-mode: plus-lighter;

}

.tooright::before {
  @include dots(40);
  animation-duration: 44s;
  animation-delay: -27s;
}

.tooright::after {
  @include dots(40);
  animation-duration: 43s;
  animation-delay: -32s;
}

.blow::before {
  @include dots(40);
  animation-duration: 42s;
  animation-delay: -23s;
}

.blow::after {
  @include dots(4);
  animation-duration: 4s;
  animation-delay: -19s;
}

.h2ml::before {
  content: "";
  letter-spacing: 0.15rem;
  text-shadow: 0 0 5px oklch(90% 0.02 262.9);
/*   white-space: pre; */
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform-origin: preserve-3d;
  transform: translate(-50%, -50%);
  text-align: center;
  color: oklch(95% 0.02 262.9);
}

.h2ml:first-line {
  font-size: 300%;
  font-style: italic;
  letter-spacing: -10px;
  color: oklch(95% 0.02 262.9);
}

h1 {
  padding-bottom: 3vmax;
  font-size: 164px;
}

@keyframes move {
  from {
    transform: rotate(0deg) scale(1.002) translateZ(-20px);
  }
  to {
    transform: rotate3d(0deg) scale(1.008) translateZ(20px);
  }
}
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }

        /* Variables */
        :root {
            --color-gray: #6F7073;
            --color-green-dark: #8CBF3F;
            --color-green-light: #BCD991;
            --color-green-bright: #8FC63F;
            --color-white: #F2F2F2;
        }

        /* Layout */
        .container {
            max-width: 1400px;
            margin: 10% auto;
            padding: 10rem 2rem;
        }

        /* Hero Section */
        .hero {
          overflow: hidden;
          background: 
            linear-gradient(
              45deg,
              oklch(55% 0.02 262.9),
              oklch(50% 0.02 262.9),
              oklch(40% 0.02 262.9)
            );
            position: relative;
            padding: 12vh 20%;
            min-height: 60vh;
            display: flex;
            align-items: center;
            position: relative;
            animation: 11112s move infinite ease-in;
        }

        .hero-content {
            text-align: center;
            color: white;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h2 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .hero p {
            font-size: 1.25rem;
            opacity: 0.9;
        }

        /* Main Content Grid */
        .main-grid {
            display: grid;
            grid-template-columns: 5fr 7fr;
            gap: 2rem;
            margin-top: 120px;
            position: relative;
            z-index: 2;
            padding: 0 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Form Styles */
        .form-container {
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .form-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--color-gray);
        }

        .form-input {
            width: 100%;
            padding: 0.75rem;
            border: none;
            border-bottom: 2px solid var(--color-green-light);
            background-color: rgba(255,255,255,0.05);
            transition: all 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-bottom-color: var(--color-green-bright);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .submit-button {
            width: 100%;
            padding: 1rem 2rem;
            background-color: var(--color-green-bright);
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Contact Cards */
        .contact-card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        .contact-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: #333;
        }

        .contact-info {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .icon-container {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: var(--color-green-light);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-container svg {
            width: 1.5rem;
            height: 1.5rem;
            color: white;
        }

        .contact-details h4 {
            font-size: 1.125rem;
            margin-bottom: 0.25rem;
            color: #333;
        }

        .contact-details p {
            color: var(--color-gray);
        }

        /* Social Icons */
        .social-icons {
            display: flex;
            gap: 1rem;
        }

        .social-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: var(--color-green-light);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            transform: translateY(-2px);
            background-color: var(--color-green-bright);
        }

        /* Animations */
        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .animate-up {
            animation: slideUp 0.6s ease forwards;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .main-grid {
                grid-template-columns: 1fr;
                margin-top: -60px;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }

            .form-container {
                padding: 2rem;
            }

            .hero {
                padding: 8vh 0;
            }
        }
</style>