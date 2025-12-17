export default {
    routes: [
        {
            method: "GET",
            path: "/courses/:id/youtube-url",
            handler: "course.getYoutubeUrl",
            config: {
                auth: false,
            },
        },
    ],
};
