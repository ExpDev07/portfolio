<template>
    <!-- Navbar -->
    <div class="bg-white text-black">
        <header class="max-w-6xl mx-auto px-5 py-16 flex items-center justify-between">
            <!-- Logo -->
            <NuxtLink class="pb-4 text-4xl font-mono font-semibold inline-block border-b-4 border-gray-200 hover:border-green-400" to="/">
                @ExpDev07
            </NuxtLink>
            <!-- Navigation -->
            <nav>
                <ul class="flex items-center text-3xl">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ExpDev07">
                            <font-awesome-icon class="ml-6 text-gray-700 hover:text-gray-800" :icon="['fab', 'github']" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
                            <font-awesome-icon class="ml-6 text-blue-400 hover:text-blue-500" :icon="['fab', 'twitter']" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- Content -->
        <div>
            <main class="max-w-6xl mx-auto px-5 py-12 my-12">
                <Nuxt />
            </main>
        </div>
        <!-- Footer -->
        <footer class="bg-black text-white">
            <div class="max-w-6xl mx-auto px-5 py-5">
                <p class="text-center text-lg">
                    Laget med <font-awesome-icon class="mx-1 text-red-400 hover:text-red-500" icon="heart" /> av Marius
                </p>
            </div>
        </footer>
    </div>
</template>
