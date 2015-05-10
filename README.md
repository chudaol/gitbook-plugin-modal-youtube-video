Represent youtube videos inside a modal in your gittbook
==============

![Link](screenshot1.png)

![Video](screenshot2.png)

This plugins requires gitbook `>=2.0.0`.

### How to use?

Add plugin to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["modal-youtube-video"]
}
```

Add youtube video source and a label for the link

```

{% modalYoutube %}https://www.youtube.com/watch?v=uRiLhXiDH18 Look at this video!{% endmodalYoutube %}
```

The video will be replace by the link with given label which opens a modal when clicked.