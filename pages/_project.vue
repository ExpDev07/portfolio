<template>
    <div>
        <div class="p-5 md:p-10 rounded-lg border-2 border-green-400 bg-gradient-to-br from-green-100 to-blue-100">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="readme min-w-full prose prose-lg xl:prose-xl" v-html="readme" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: null,
            url: null,
            readme: null
        }
    },
    async mounted () {
        // Get project name and branch.
        const name = this.$route.params.project

        // URLs.
        const url = 'https://github.com/ExpDev07/' + name
        const readmeUrl = 'https://raw.githubusercontent.com/ExpDev07/' + name + '/main/README.md'

        // Fetch readme markdown.
        const markdown = await (await fetch(readmeUrl)).text()

        // Set data properties.
        this.name = name
        this.url = url
        this.readme = this.$marked(markdown)
    }
}
</script>

<style lang="postcss" scoped>
.readme >>> img {
    @apply inline mt-4 mb-4;
}
</style>
