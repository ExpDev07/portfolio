<template>
    <div>
        <!-- Header -->
        <header class="flex items-center justify-between">
            <!-- Logo -->
            <a class="pb-4 text-4xl font-semibold inline-block border-b-4 border-gray-200" href="/">
                @ExpDev07
            </a>
            <!-- Navigation -->
            <nav>
                <ul class="flex items-center text-3xl">
                    <li>
                        <a href="https://twitter.com">
                            <font-awesome-icon class="ml-6 text-gray-700 hover:text-gray-800" :icon="['fab', 'github']" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ExpDev07">
                            <font-awesome-icon class="ml-6 text-blue-400 hover:text-blue-500" :icon="['fab', 'twitter']" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="my-12 prose prose-lg xl:prose-xl">
            <section>
                <h2>
                    # Introduction
                </h2>
                <p>
                    Hi! My name is Marius. I go by the pseudonym ExpDev07 (or sometimes just ExpDev), which by you will find my various
                    social profiles and GitHub profile under. I'm currently 20 years of age and attending university for a general
                    bachelor in software development.
                </p>
                <p>
                    When not attending to duties of school, my hobbies include...
                </p>
                <ul>
                    <li>
                        writing interesting software,
                    </li>
                    <li>
                        learning new and facinating technology,
                    </li>
                    <li>
                        playing video games,
                    </li>
                    <li>
                        and going to the gym.
                    </li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>
export default {}
</script>
