export type MediaProvider = "cloudflare-r2" | "s3" | "local";

export const mediaConfig = {
  provider:
    (process.env.MEDIA_PROVIDER as MediaProvider | undefined) ??
    "cloudflare-r2",
  bucket: process.env.MEDIA_BUCKET ?? "client-assets",
  region: process.env.MEDIA_REGION ?? "auto",
  endpoint: process.env.MEDIA_ENDPOINT ?? "",
  publicBaseUrl: process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "",
  projectPrefix: "base-template",
  maxUploadSizeMb: 50,
  acceptedKinds: ["image", "video", "file"] as const,
  recommendedStrategy: {
    primary: "cloudflare-r2",
    fallback: "s3",
    rationale:
      "Cloudflare R2 ofrece API compatible con S3 y costos de egreso más amigables para media de clientes. S3 sigue siendo la mejor alternativa cuando el cliente ya opera sobre AWS.",
  },
} as const;
