
```markdown
# Image Downloader

This project is a simple web-based application that allows users to download images from the internet
by providing the image URL.The app takes the image URL as input and attempts to download
the image file directly to the user's device.

## Features

- **Image Download by URL**: Users can input the URL of an image, and the app will download
it directly to their device.
- **Automatic File Naming**: The downloaded image is saved with a default name (`myImage.png`),
which can be easily customized.
- **Cross-Origin Resource Sharing (CORS) Handling**: The app handles CORS issues using a variety
of techniques, including manual
download prompts and CORS proxy options.

## How It Works

1. **Input the Image URL**: The user provides the URL of the image they wish to download.
2. **Click Download**: The app processes the URL and attempts to download the image.
3. **CORS Considerations**: Due to CORS restrictions, some images might not be directly
downloadable without additional setup (e.g., a CORS proxy).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdelhalimBj/image-downloader.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd image-downloader
   ```

3. **Open the `index.html` file** in your web browser:
   You can simply double-click the `index.html` file or serve it via a local server.

## Usage

1. Open the app in your web browser.
2. Enter the URL of the image you want to download in the input field.
3. Click the "Download" button.
4. The image will be downloaded to your device.

## CORS Considerations

Due to browser security restrictions (CORS), not all images can be fetched and downloaded directly. If you encounter issues:

- **Use a CORS Proxy**: You can configure the app to use a CORS proxy service to bypass these restrictions. Be aware of the limitations and risks of using public CORS proxies.
- **Manual Download**: The app may provide an option to download the image manually if automatic download fails.

## Customization

- **File Name**: The default file name is `myImage.png`. You can change this by modifying the `download()` function in the script.
- **CORS Proxy**: If you have access to a server, you can set up your own CORS proxy to handle requests securely.

## Example Code

Here’s a basic example of how the image downloading functionality is implemented:

```javascript
async function toDataURL(url) {
    const blob = await fetch(url, { mode: 'no-cors' }).then(res => res.blob());
    return URL.createObjectURL(blob);
}

async function download() {
    const url = document.getElementById('imageUrl').value;
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
```

## Known Issues

- **CORS Restrictions**: Some images may not be downloadable due to CORS policies enforced by the image server.
- **0-Byte Downloads**: When using `no-cors`, the image might download with 0 bytes if the server does not permit CORS requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out via GitHub Issues.
