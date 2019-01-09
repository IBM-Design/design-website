# Content

## File Structure

All markdown files live inside of the `src/content` folder and follow the site navigation. They live inside a folder that is named the same as the file unless it is a page with tabbed navigation. "Tabbed" pages _(for example Getting Starter > Developers)_ should have all the pages inside the same folder, with the file name matching the page title.

```
src
├── content
   ├── approach
      ├── approach.md
      ├── design-philosophy
          ├── design-philosophy.md
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

    ### This generates an H2 heading `expressive-heading-04`

    ### This generates an H3 heading. `heading-03`

    #### This generates an H4 heading. `heading-02` 

    **This is bold text.**

    _This is italic text._

### Link

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

`[Carbon](http://www.carbondesignsystem.com/)`

If you need a link to open in a new window you will have to use standard html to target the new window.

`<a href="http://www.carbondesignsystem.com" target="_blank">Carbon</a></p>`

### Images

`![image alt text](images/image.png)`

### Video

`vimeo: https://vimeo.com/293453905`

### Lists
```
- This is a bulleted list
- List item 2

1. This is an ordered list
2. List item 2
```

### Tables


    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |

### Quotes

Quotes will be displayed differently depending on what column they are placed in. Below is an example of an italic quote that would be placed in the sidebar(col-3 & col-4), these sidebar quotes will display with the top decorative border, they are not italic by default. Quotes placed in the main content blocks (col-7) will display in blue text.

```
> _We’re designing experiences that don’t exist yet. Because of that, we’re constantly innovating and improving what we’re making. It’s an amazing challenge, and it’s also incredibly rewarding._

> — Amritha Prasad, Product Designer
```

### Paragraph

Paragraphs have four available sizes. The default is 16px/1rem, or `size="md"`. This is the default for any text on the page and does not need to be wrapped in a  `<p>` tag. 

- **sm:** `body-short-01` 14px
- **md:** `body-short-02` 16px
- **lg:** `heading-03` 20px
- **xl:** `expressive-heading-04` responsive type

```
<p size="sm">This is a paragraph with small text</p>
<p size="md">This is the default paragraph size</p>
<p size="lg">This is a large paragraph</p>
<p size="xl">This is the largest responsive paragraph size</p>
```

## Custom Markdown Components

**IMPORTANT** If using markdown inside of custom components you **must** have an empty space between the component tag and the markdown or the html won't render.

```
<component>

## Markdown

</component>
```
### Title Block

A wrapper component for the full height black title blocks at the top of the main pages. 

`<title-block>`

### Anchor Links

Adds ↳ as bullet for an anchor list of links. Used within the `<title-block>` component and also on the page.

```
<anchor-links>

- [How we work](#how-we-work)
- [Dimensions of diversity](#dimensions-of-diversity)
- [Work with us](#work-with-us)

</anchor-links>
```

## Icon

Options:

color: black (default), blue, white
icon: ArrowRight16 (default), ArrowUpRight20, ArrowDown32
inline: true or false (default)
align: right or left(default)

Inline styling for link w/ icon

class link--icon updates <a> text-decoration
<span> is to add border-bottom on hover, without adding a border under the icon (just text)
class icon--inline displays inline and vertical-aligns icon

    <!-- for links with icon -->
    <a class="link--icon" href=#>
        <span>View More</span> 
        <icon color="blue" inline="true"></icon>
    </a>

    <a class="link--icon" href=#>
        <span>View More</span> 
        <icon color="blue" name="ArrowUpRight20" inline="true"></icon>
    </a>

    <!-- black icon options -->
    <icon></icon>
    <icon name="ArrowUpRight20"></icon>
    <icon name="ArrowDown32"></icon>
    <icon align="right"></icon>

    <!-- white icon options -->
    <icon color="white"></icon>
    <icon color="white" icon="ArrowUpRight20"></icon>
    <icon color="white" icon="ArrowDown32"></icon>
    <icon color="white" align="right"></icon>

    <!-- blue icon options -->
    <icon color="blue"></icon>
    <icon color="blue" icon="ArrowUpRight20"></icon>
    <icon color="blue" icon="ArrowDown32"></icon>
    <icon color="blue" align="right"></icon>

![icon example](https://user-images.githubusercontent.com/32556167/50860068-9b008e00-135a-11e9-97a1-76b0244bdb0c.png)

## Custom Grid Components

This website uses the default Carbon grid, in order to to this you will need to wrap your content inside custom grid components. 

### Grid

All content and componnents will need to be wrapped innside a `<grid>` component **except** the `<title-block>`, which utilizes its own grid code. 

The grid component has one prop, background which is used to tell the section what background color to use. The following colors are available.

- `black`
- `white`
- `gray-10`
- `gray-20`
- `gray-100`
- `black-white` _50/50 black and white, black on top_

```
<grid background="gray-10">

Markdown, html, custom components

</grid>
```

### Column
Columns are used inside of the `<grid>` component to create your page layouts. Layout is based on the Carbon 16 column grid. 

*There 16 columns at large breakpoint, 8 columns at medium an 4 columns at small*

The following options are available

- `lg` _how many columns the content should span at the large breakpoint
- `md` _how many columns the content should span at the large breakpoint
- `sm` _how many columns the content should span at the large breakpoint
- `offset_lg` _how many columns you want to content offset by at the large breakpoint

If you only add a value for the large breakpoint then the columnn will default to full width at smaller breakpoints.

**IMPORTANT** If using markdown inside of custom components you **must** have an empty space between the component tag and the markdown or the html won't render.

```
<grid background="gray-10">
<column lg="6" offset_lg="2">

## Markdown and content here

</column>
<column lg="4">

Content here

</column>
</grid>
```