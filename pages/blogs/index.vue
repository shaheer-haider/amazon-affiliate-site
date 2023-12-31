<template>
  <main class="container mx-auto px-6">
    <Head>
      <Title>Mayzii - Blogs</Title>
    </Head>
    <div class="divide-y divide-gray-200">
      <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Latest Blogs
        </h1>
      </div>
      <ul class="divide-y divide-gray-200">
        <li v-for="blog in blogsData" class="py-12">
          <article>
            <div class="flex flex-col md:flex-row mx-auto w-max md:w-full gap-4">
              <img
                class="w-[90vw] max-w-[350px] sm:w-[350px]"
                :src="filesPath + blogsCollectionID + '/' + blog.id + '/' + blog.image"
              />
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <div>
                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                      <NuxtLink
                        class="text-gray-900"
                        :to="'/blogs/' + blog.slug + '?id=' + blog.id"
                      >
                        {{ blog.title }}</NuxtLink
                      >
                    </h2>
                    <div class="flex flex-wrap">
                      <span
                        v-for="tag in blog.tags?.split(',')"
                        class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  <div class="prose max-w-none text-gray-500">{{ blog.punchline }}</div>
                </div>
                <div class="text-base font-medium leading-6">
                  <NuxtLink
                    class="text-primary-500 hover:text-primary-600"
                    :to="'/blogs/' + blog.slug + '?id=' + blog.id"
                    :aria-label="blog.title"
                  >
                    Read more →
                  </NuxtLink>
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-500">
                      <time datetime="2021-08-07T15:32:14.000Z">{{
                        formatDate(blog.date)
                      }}</time>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
    <div
      v-if="showViewMorePosts && blogsData.length"
      class="flex justify-end text-base font-medium leading-6"
    >
      <button
        @click="fetchMoreBlogs()"
        class="flex items-center gap-2 border px-4 py-2 rounded-lg transition hover:bg-gray-800 hover:text-white"
      >
        View More Posts →
      </button>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
const filesPath = useRuntimeConfig().public.FILES;
const blogsCollectionID = useRuntimeConfig().public.BLOGS_COLLECTION_ID;

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};

const showViewMorePosts = ref(true);
const apiBaseUrl = useRuntimeConfig().public.API;
const blogsData = ref([]);

const page = ref(1);

let perApiCallLimit = 10;
async function fetchBlogs() {
  await axios
    .get(
      apiBaseUrl +
        "blogs/records?filter=(draft=false)&sort=-date&perPage=" +
        perApiCallLimit +
        "&page=" +
        page.value
    )
    .then((res) => {
      blogsData.value = blogsData.value.concat(res.data.items);
      if (page.value >= res.data.totalPages) {
        showViewMorePosts.value = false;
      }
    });
}

function fetchMoreBlogs() {
  page.value += 1;
  fetchBlogs();
}

await fetchBlogs();
</script>
