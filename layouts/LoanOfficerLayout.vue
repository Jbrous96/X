<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <img src="/assets/xtreme-logo.png" alt="xtreme-mortgage" class="h-12 w-5" />
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <router-link v-for="item in navigationItems" :key="item.path" :to="item.path"
                                class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2" :class="[
                  $route.path === item.path
                    ? 'border-primary font-medium'
                    : 'border-transparent hover:border-gray-300'
                ]">
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button @click="logout" class="text-gray-500 hover:text-gray-700">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'LoanOfficerLayout',
        setup() {
            const router = useRouter()

            const navigationItems = [
                { name: 'Dashboard', path: '/production/dashboard' },
                { name: 'Clients', path: '/production/clients' },
                { name: 'Pipeline', path: '/production/pipeline' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '/careers' }
            ]

            const logout = () => {
                localStorage.removeItem('userRole')
                router.push('/')
            }

            return {
                navigationItems,
                logout
            }
        }
    })
</script>
