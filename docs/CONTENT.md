# Content

## File Structure

All markdown files live inside of the `src/content` folder and follow the site navigation. They live inside a folder that is named the same as the file unless it is a page with tabbed navigation. "Tabbed" pages _(for example Getting Starter > Developers)_ should have all the pages inside the same folder, with the file name matching the page title.

```
src
├── content
   ├── getting-started
      ├── designers
          ├── images
                ├── image1.png
                ├── image2.png
          ├── designers.md
```

## Frontmatter

The top of each markdown file has required frontmatter fields to display the title for the page.

```
---
title: Page Title
---
```

Required fields are:

- `title`: The title of the page

## Markdown

    ### This generates an H2 heading with an underline

    ### This generates an H3 heading (blue).

    #### This generates an H4 heading.

    **This is bold text.**

    _This is italic text or an image caption._

    This is a normal paragraph with a [link](http://www.link.com).

    > This is a block quote.

### Link

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

`[Carbon](http://www.carbondesignsystem.com/)`

If you need a link to open in a new window you will have to use standard html to target the new window.

`<a href="http://www.carbondesignsystem.com" target="_blank">Carbon</a></p>`

### Images

Images will render as full width responsive images by default. Use blockquote in front of an image to render a smaller image for text to wrap around.

100% width standard image
`![image alt text](images/image.png)`

### Lists

    * This is a bulleted list
    * List item 2

    1. This is an ordered list
    2. List item 2

### Tables

    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |

### Code & syntax highlighting

We support inline code and code blocks.

    Inline `code` has `back-ticks around` it.


    ```
    Blocks of code are fenced by lines with three back-ticks

    ```

## Custom Markdown Components

