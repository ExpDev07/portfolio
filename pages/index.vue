<template>
    <div>
        <!-- Header -->
        <header class="flex items-center justify-between">
            <!-- Logo -->
            <a class="pb-4 text-4xl font-mono font-semibold inline-block border-b-4 border-gray-200 hover:border-green-400" href="/">
                @ExpDev07
            </a>
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
        <!-- Main -->
        <main class="my-12 prose prose-lg xl:prose-xl">
            <section>
                <h2>
                    # This is me
                </h2>
                <p>
                    Hi! My name is Marius. I go by the pseudonym ExpDev07 (or sometimes just ExpDev), which by you will find my various
                    social profiles and <a href="https://github.com/ExpDev07">GitHub profile</a> under. I'm currently 20 years of age and
                    attending university for a general bachelor in software development.
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
            <section>
                <h2>
                    # Education
                </h2>
                <ul>
                    <li>
                        <span class="font-semibold">2007-2013:</span> Primary school.
                    </li>
                    <li>
                        <span class="font-semibold">2013-2015:</span> Lower secondary school.
                    </li>
                    <li>
                        <span class="font-semibold">2015-2019:</span> Upper secondary school.
                    </li>
                    <li>
                        <span class="font-semibold">2019-present:</span> Higher eduction, university.
                    </li>
                </ul>
            </section>
            <section>
                <h2>
                    # Projects
                </h2>
                <p>
                    Throughout my years as a software developer, I've written and contributed to open source software. I am a strong
                    believer in the concept and have tried to be as active as possible in that domain. See a few of my projects...
                </p>
                <ul>
                    <li v-for="repository in repositories" :key="repository.id">
                        <a target="_blank" rel="noopener noreferrer" :href="repository.html_url" alt="Github Repository">{{ repository.full_name }}</a>
                        &mdash;
                        <font-awesome-icon class="text-yellow-400" icon="star" /> {{ repository.stargazers_count }}
                    </li>
                </ul>
            </section>
            <section>
                <h2>
                    Support me
                </h2>
                <p>
                    Like my work and want to contribute financially? Consider chipping in.
                </p>
                <ko-fi-button
                    username="expdev"
                    color="#12b57c"
                    title="Chip in a coffee"
                />
            </section>
        </main>
        <!-- Footer -->
        <footer>
            <p>
                &COPY; 2020
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            repositories: [
                {
                    id: 1,
                    full_name: 'ExpDev07/coronavirus-tracker-api',
                    html_url: 'https://github.com/' + 'ExpDev07/coronavirus-tracker-api',
                    stargazers_count: '1,5k'
                },
                {
                    id: 2,
                    full_name: 'ExpDev07/laravel-cashier-stripe-connect',
                    html_url: 'https://github.com/' + 'ExpDev07/laravel-cashier-stripe-connect',
                    stargazers_count: '3'
                },
                {
                    id: 3,
                    full_name: 'ExpDev07/Commy',
                    html_url: 'https://github.com/' + 'ExpDev07/Commy',
                    stargazers_count: '8'
                },
                {
                    id: 4,
                    full_name: 'ExpDev07/legacy-rp-admin-v3',
                    html_url: 'https://github.com/' + 'ExpDev07/legacy-rp-admin-v3',
                    stargazers_count: '18'
                }
            ]
        }
    },
    mounted () {
        // this.GitHubAPI.get('/user/ExpDev07/repos', {}, [this.repositories, 'repositories'])
    }
}
</script>
