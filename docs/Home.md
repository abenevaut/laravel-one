# laravel-one documentation
Laravel-one, is a tool to generate static webpages based on [Blade Templates](https://laravel.com/docs/master/blade).

## Install

### From latest release
Laravel-one binary is available on [release page](https://github.com/abenevaut/laravel-one/releases/latest)

```bash
curl -L -o laravel-one https://github.com/abenevaut/laravel-one/releases/latest/download/laravel-one
chmod +x laravel-one
```

A hash file is available to check the integrity of the binary.

```bash
curl -L -o laravel-one https://github.com/abenevaut/laravel-one/releases/latest/download/laravel-one.sha512sum
sha512sum -c laravel-one.sha512sum
```

### From composer
Or, you can install the tool locally or globally with composer, depending on your usage.

```bash
composer require abenevaut/laravel-one
```

```bash
composer global require abenevaut/laravel-one
```

- [Packagist](https://packagist.org/packages/abenevaut/laravel-one)

## Usage
To create a new project, you have to create the following directories & files:

Note: A [bootstrap theme](https://github.com/abenevaut/laravel-one-bootstrap) exists to help you to start.

- `content`: Directory containing all your yaml files that contains the content of your pages
- `theme`: Directory containing all your blade templates, all yaml content will be shared with templates

To create a page, you have to create a new content `content/index.yml` file with the following basic content:

Note: content filename will define the HTML filename, `index.yml` => `index.html`, same for subdirectories.
```yaml
view: the-blade-template-to-use

key_example: "value"
```

To display your content, you have to create a new blade template `theme/the-blade-template-to-use.blade.php` file with the following basic content:
```php
{{ $key_example }}
```

### Content translation
- add `content/lang` directory and another directory peer language like `content/lang/en`
- the language namespace is `content`, call translation `{{ \Illuminate\Support\Facades\Lang::get($readme, [], 'en') }}`

### Markdown content
```html
<x-markdown>{{ $readme }}</x-markdown>
```

Generate the static website:
```shell
laravel-one generate https://my-website.com
```

All generated files are in the `dist` directory.
A `sitemap.xml` file is also generated.
