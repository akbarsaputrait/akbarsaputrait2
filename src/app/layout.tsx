import PublicLayout from "@components/layouts/Public";
import StoryblokProvider from "@components/providers/StoryBlokProvider";
import "@styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <PublicLayout component={children} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
