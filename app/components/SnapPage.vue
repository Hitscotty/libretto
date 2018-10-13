<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!" />
        <GridLayout colums="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0" />
        </GridLayout>
        <DockLayout stretchLastChild="false" backgroundColor="#3c495e">
            <Button @tap="capture" text="Capture" dock="bottom" height="80" backgroundColor="#289062">
                <Image src="https://placem.at/things?w=150" width="150" class="img-circle"></Image>
            </Button>
        </DockLayout>
    </Page>
</template>

<script>
    import * as camera from "nativescript-camera";
    import {
        Image
    } from "ui/image";

    export default {
        data() {
            return {
                msg: 'Snapshots!'
            }
        },
        methods: {
            async capture() {
                console.log("[SnapPage] dispatched capture");
                try {
                    const options = {
                        width: 300,
                        height: 300,
                        keepAspectRatio: false,
                        saveToGallery: true,
                        cameraFacing: "front"
                    };
                    const imageAsset = await camera.takePicture(options);
                    console.log("Result is an image asset instance");
                    var image = new Image();
                    image.src = imageAsset;
                } catch (err) {
                    console.log("Error -> " + err.message);
                }
            }
        },
        mounted() {
            const isAvailable = camera.isAvailable();
            if (isAvailable) {
                camera.requestPermissions();
            } else {
                console.log("No Camera Available");
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>