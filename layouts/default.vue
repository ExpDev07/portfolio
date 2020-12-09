<template>
    <div class="max-w-6xl mx-auto px-5 py-16 bg-white text-black">
        <!-- Header -->
        <header class="flex items-center justify-between">
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
        <main class="my-12">
            <Nuxt />
        </main>
        <!-- Footer -->
        <footer>
            <p>
                &COPY; 2020
            </p>
        </footer>
    </div>
</template>
