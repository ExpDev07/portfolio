<template>
    <div class="prose prose-lg xl:prose-xl -mt-36">
        <section>
            <h2>
                # This is me
            </h2>
            <p>
                Hi! My name is Marius. I go by the pseudonym ExpDev07 (or sometimes just ExpDev), which by you will find my various
                social profiles and <a href="https://github.com/ExpDev07">GitHub profile</a> under. I'm currently 21 years of age and
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
        <hr>
        <section>
            <h2>
                # Professional experience
            </h2>
            <ul>
                <li>
                    <strong>2016-2021:</strong> Freelancing and completing small to medium projects for multiple clients.
                </li>
                <li>
                    <strong>2021-present:</strong> Working at Techweb as a Fullstack Engineer.
                </li>
            </ul>
        </section>
        <hr>
        <section>
            <h2>
                # Education
            </h2>
            <ul>
                <li>
                    <strong>2007-2013:</strong> Primary school.
                </li>
                <li>
                    <strong>2013-2015:</strong> Lower secondary school.
                </li>
                <li>
                    <strong>2015-2019:</strong> Upper secondary school.
                </li>
                <li>
                    <strong>2019-present:</strong> Higher eduction, university.
                </li>
            </ul>
        </section>
        <hr>
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
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Github Repository"
                        :href="repository.html_url"
                    >
                        {{ repository.full_name }}
                    </a>
                    &mdash;
                    <font-awesome-icon class="text-green-400" icon="star" /> {{ repository.stargazers_count }}
                </li>
            </ul>
        </section>
        <hr>
        <section>
            <h2>
                # Skills & expertise
            </h2>
            <p>
                I have been programming for 7 years now and consider myself experienced in many different programming languages. Web is what
                interests me the most and I have been doing fullstack work for some time now, working on both the frontend and backend of
                applications I make.
            </p>
            <h3>
                # Backend
            </h3>
            <p>
                See technologies that I am experienced in concerning backend development...
            </p>
            <ul>
                <li>
                    <strong>Databases</strong>
                    <ul>
                        <li>MySQL and other relational databases</li>
                        <li>MongoDB</li>
                    </ul>
                </li>
                <li>
                    <strong>CMS</strong>
                    <ul>
                        <li>Hubspot</li>
                        <li>Wordpress</li>
                    </ul>
                </li>
                <li>
                    <strong>PHP</strong>
                    <ul>
                        <li>Laravel</li>
                    </ul>
                </li>
                <li>
                    <strong>JavaScript / TypeScript on Node.js</strong>
                    <ul>
                        <li>ExpressJS</li>
                        <li>NestJS</li>
                    </ul>
                </li>
                <li>
                    <strong>Python</strong>
                    <ul>
                        <li>Flask</li>
                        <li>FastAPI</li>
                    </ul>
                </li>
                <li>
                    <strong>Java / Kotlin</strong>
                    <ul>
                        <li>Spring</li>
                    </ul>
                </li>
            </ul>
            <h3>
                # Frontend
            </h3>
            <p>
                See technologies that I am experienced in concerning frontend development...
            </p>
            <ul>
                <li>
                    <strong>HTML</strong>
                </li>
                <li>
                    <strong>CSS</strong>
                    <ul>
                        <li>Preprocessors (SASS, PostCSS)</li>
                        <li>Tailwindcss</li>
                        <li>Bootstrap 4/5</li>
                        <li>Bulma</li>
                    </ul>
                </li>
                <li>
                    <strong>JavaScript / TypeScript</strong>
                    <ul>
                        <li>Vue</li>
                        <li>EmberJS</li>
                    </ul>
                </li>
            </ul>
        </section>
        <hr>
        <section>
            <h2>
                # Honors & Awards
            </h2>
            <ul>
                <li>
                    Completed <a href="https://hacktoberfestchecker.jenko.me/user/ExpDev07">Hacktoberfest for 2020</a> by contributing 5 pull requests to open source software during October of that year.
                </li>
            </ul>
        </section>
        <hr>
        <section>
            <h2>
                # Support me
            </h2>
            <p>
                Like my open source work and want to contribute financially? Consider chipping in.
            </p>
            <ko-fi-button
                username="expdev"
                color="#12b57c"
                title="Chip in a coffee"
            />
        </section>
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
                    stargazers_count: '1,6k'
                },
                {
                    id: 2,
                    full_name: 'ExpDev07/laravel-cashier-stripe-connect',
                    html_url: 'https://github.com/' + 'ExpDev07/laravel-cashier-stripe-connect',
                    stargazers_count: '26'
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
                    stargazers_count: '26'
                }
            ]
        }
    },
    mounted () {
        // this.GitHubAPI.get('/user/ExpDev07/repos', {}, [this.repositories, 'repositories'])
    }
}
</script>
