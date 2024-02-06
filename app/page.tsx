import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import PhoneQRCodeModal from "@/components/PhoneQRCodeModal/PhoneQRCodeModal";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Effortlessly transform your content to &nbsp;
        </h1>
        <h1 className={title({ color: "green" })}>audio&nbsp;</h1>
        <br />
        <h1 className={title()}>Go multi-channel</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          with your content by creating captivating audio from text.
        </h2>
      </div>
      <p>
        For Context to get the demo to work best: You are a content marketer or
        publisher calling in to potentially book a demo with Adauris.{" "}
      </p>

      <div className="flex gap-3">
        <PhoneQRCodeModal />
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Call us <Code color="primary">+14158497544</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
