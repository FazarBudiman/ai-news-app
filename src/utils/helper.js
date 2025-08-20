const normalizeData = (data, format) => {
    const formatMappings = {
    format1: {
        title: "title",
        description: "description",
        url: "url",
        image: "urlToImage",
        publishedAt: "publishedAt",
        source: (item) => item.source?.name
    },
    format2: {
        title: "title",
        description: "description",
        url: "link",
        image: "image_url",
        publishedAt: "pubDate",
        source: (item) => item.source_name
    },
    format3: {
        title: "title",
        description: "description",
        url: "url",
        image: "image",
        publishedAt: "publishedAt",
        source: (item) => item.source?.name
    }
    };

    const mapping = formatMappings[format];
    return data.map((item) => {
        return Object.fromEntries(
        Object.entries(mapping).map(([key, path]) => [
            key,
            typeof path === "function" ? path(item) : item[path]
        ])
        );
    });
};

export default normalizeData
