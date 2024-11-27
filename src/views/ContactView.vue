<template>
<AnimatedBackground class="AnimatedBackground inset-3 z-3">
  <div class="pt-20">
    <section class="py-24 bg-gray-50 bg-AnimatedBackground">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-center mb-12">Get in Touch</h1>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    :class="{ 'border-red-500': errors.firstName }"
                  />
                  <span v-if="errors.firstName" class="text-sm text-red-500">
                    {{ errors.firstName }}
                  </span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    :class="{ 'border-red-500': errors.lastName }"
                  />
                  <span v-if="errors.lastName" class="text-sm text-red-500">
                    {{ errors.lastName }}
                  </span>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  :class="{ 'border-red-500': errors.email }"
                />
                <span v-if="errors.email" class="text-sm text-red-500">
                  {{ errors.email }}
                </span>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="text-sm text-red-500">
                  {{ errors.message }}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>n
          </div>
        </div>
      </div>
   </section>
  </div>
  </AnimatedBackground>


    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <font-awesome-icon icon="map-marker-alt" class="text-4xl text-green-500 mb-4" />
            <h3 class="text-xl font-bold mb-2">Visit Us</h3>
            <p class="text-gray-600">123 Business Avenue<br>Suite 100<br> City, State 12345</p>
          </div>
          <div class="text-center">
            <font-awesome-icon icon="envelope" class="text-4xl text-green-500 mb-4" />
            <h3 class="text-xl font-bold mb-2">Email Us</h3>
            <p class="text-gray-600">
              <a href="mailto:info@xtrememortgageworx.com" class="hover:text-green-500">
                info@xtrememortgageworx.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Google Map Section -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required')
})

export default defineComponent({
  name: 'ContactView',
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: schema
    })

    const { value: firstName } = useField('firstName')
    const { value: lastName } = useField('lastName')
    const { value: email } = useField('email')
    const { value: message } = useField('message')
    const isSubmitting = ref(false)


    const onSubmit = async (values) => {
      isSubmitting.value = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted:', values)
        // Reset form after successful submission
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        message.value = ''
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form: {
        firstName,
        lastName,
        email,
        message
      },
      errors,
      isSubmitting,
      handleSubmit: handleSubmit(onSubmit)
      }
  }
})
</script>