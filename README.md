# laravel-one

Tool to generate static webpages based on [Blade Templates](https://laravel.com/docs/master/blade).

- [Available on Packagist.org - abenevaut/laravel-one](https://packagist.org/packages/abenevaut/laravel-one)

![how-to](https://raw.githubusercontent.com/abenevaut/laravel-one/master/demo.gif)

## Install
```shell
composer global require abenevaut/laravel-one
```

## Build
```shell
php laravel-one app:build laravel-one
php laravel-one app:build laravel-one --build-version=0.0.X
```

## Usage

To create a new project, you have to create the following directories & files:

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

Generate the static website:
```shell
laravel-one generate https://my-website.com
```

All generated files are in the `dist` directory.
A `sitemap.xml` file is also generated.

## Licensing

- Credits to [tailwindtoolbox](https://github.com/tailwindtoolbox/Minimal-Blog) for the HTML template
