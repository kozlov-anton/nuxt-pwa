<template>
    <h1>Update PDF metadata</h1>
    <Card className="flex flex-col">
        <div class="mb-3">
            <input type="file" @change="handleFileChange" accept=".pdf" />
            <button class="bg-orange rounded-card p-2" @click="updateMetadata">
                Update Metadata
            </button>
        </div>

        <hr v-if="metadata" />
        <div v-if="metadata" class="mt-3">
            <p><strong>Title:</strong> {{ metadata.Title }}</p>
            <p><strong>Subject:</strong> {{ metadata.Subject }}</p>
            <p><strong>Author:</strong> {{ metadata.Author }}</p>
            <p><strong>Keywords:</strong> {{ metadata.Keywords }}</p>
            <p><strong>Creator:</strong> {{ metadata.Creator }}</p>
            <p><strong>Producer:</strong> {{ metadata.Producer }}</p>
        </div>
    </Card>
</template>

<script setup lang="js">
import Card from "~/components/Card.vue";
import { ref } from "vue";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

const file = ref(null);
const metadata = ref(null);

async function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
        file.value = selectedFile;
        getMetadata();
    }
}

async function getMetadata() {
    if (!file.value) {
        console.error("No file selected");
        return;
    }

    // Load the PDF document
    const pdfBytes = await file.value.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Get metadata
    metadata.value = {
        Title: pdfDoc.getTitle() || "N/A",
        Subject: pdfDoc.getSubject() || "N/A",
        Author: pdfDoc.getAuthor() || "N/A",
        Keywords: pdfDoc.getKeywords() || [],
        Creator: pdfDoc.getCreator() || "N/A",
        Producer: pdfDoc.getProducer() || "N/A",
    };
}

async function updateMetadata() {
    if (!file.value) {
        console.error("No file selected");
        return;
    }

    // Load the PDF document
    const pdfBytes = await file.value.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Update metadata
    pdfDoc.setTitle("Anton Kozlov - Senior Frontend Engineer");
    pdfDoc.setAuthor("Anton Kozlov");
    pdfDoc.setSubject("Application for Senior Frontend Engineer role");
    pdfDoc.setKeywords([
        "Vue.js",
        "Vue",
        "Nuxt.js",
        "Nuxt",
        "React.js",
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "PWA",
        "GraphQL",
        "REST",
        "CI/CD",
        "k8s",
        "Vuex",
        "Redux",
        "Vite",
    ]);
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");

    // Serialize the PDF to bytes
    const updatedPdfBytes = await pdfDoc.save();

    getMetadata();

    // Save the updated PDF file
    saveAs(
        new Blob([updatedPdfBytes]),
        "CV Kozlov Anton - Frontend Engineer.pdf",
    );
}
</script>
