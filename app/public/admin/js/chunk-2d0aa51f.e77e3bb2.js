(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa51f"],{1109:function(e,a,i){"use strict";i.r(a),a["default"]="# Files\n\n> Directus offers a full Digital Asset Management (DAM) system. This includes multiple storage adapters, nested folder\n> organization, private file access, image editing, and on-demand thumbnail generation.\n\nDirectus allows you to manage all your files in one place, including documents, images, videos, and more. Files can be\nuploaded to the [File Library](/concepts/application/#file-library) in general, or directly to an item via a\n[Single File](/guides/field-types/single-file) or [Multiple Files](/guides/field-types/multiple-files) field.\n\n#### Relevant Guides\n\n- [Uploading a File](/guides/files/#uploading-a-file)\n- [Accessing an Original File](/guides/files/#accessing-an-original-file)\n- [Creating a Thumbnail Preset](/guides/files/#creating-a-thumbnail-preset)\n- [Requesting a Thumbnail](/guides/files/#requesting-a-thumbnail)\n\n## File Fields\n\nDirectus ships with a full-featured system for digital asset management, with the following fields:\n\n- **Title** — Pulled from the file metadata if available, falls back to a formatted version of the filename\n- **Description** — Pulled from the file metadata if available\n- **Tags** — Pulled from the file metadata if available\n- **Location** — Pulled from the file metadata if available\n- **Storage** — The storage adapter where the asset is saved (readonly)\n- **Filename Disk** — The actual name of the file within the storage adapter\n- **Filename Download** — The name used when downloading the file via _Content-Disposition_\n\nThe sidebar's info component also includes the following readonly details:\n\n- **Type** — The MIME type of the file, displayed in the App as a formatted media type\n- **Dimensions** — (Images Only) The width and height of the image in pixels\n- **Size** — The file-size the asset takes up within the storage adapter\n- **Created** — The timestamp of when the file was uploaded to the project\n- **Owner** — The Directus user that uploaded the file to the project\n- **Folder** — The current parent folder that contains the file\n- **Metadata** — Metadata JSON dump of the file's EXIF, IPTC, and ICC information\n\n## Storage Adapters\n\nStorage adapters allow project files to be stored in different locations or services. By default, Directus includes the\nfollowing adapters:\n\n- **Local Filesystem** — The default, any filesystem location or network-attached storage\n- **S3 or Equivalent** — Including AWS S3, DigitalOcean Spaces, Alibaba OSS, and others\n- **Google Cloud Storage** — A RESTful web service on the Google Cloud Platform\n- **Azure Blob Storage** — Azure storage account containers\n\n## Thumbnail Transformations\n\nOur file middleware also allows for cropping and transforming image assets on the fly. This means you can simply request\nan image, include any desired transformation parameters, and you'll be served the new asset as a response. This is very\nuseful for automatically generating many different thumbnails/versions of an original file.\n\nTo impede malicious users from consuming your storage by requesting a multitude of random sizes, Directus includes a\n[Asset Allow-List](/guides/files/#creating-thumbnail-presets) to limit what transformations are possible.\n\n#### Relevant Guides\n\n- [Requesting a Thumbnail](/guides/files/#requesting-a-thumbnail)\n"}}]);