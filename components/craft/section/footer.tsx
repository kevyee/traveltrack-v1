// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import { ModeToggle } from "../theme/theme-toggle";
import { Button } from "@/components/ui/button";

// React and Next Imports
import Image from "next/image";
import Link from "next/link";

// Utility Imports
import Logo from "@/public/logo.jpg";
import Balancer from "react-wrap-balancer";
import { Instagram, Facebook } from "lucide-react";

const facebook_link = "https://www.facebook.com/traveltrack.co";
const instagram_link = "https://www.instagram.com/traveltrack";

const Footer = () => {
  return (
    <footer className="border-t drop-shadow-none	">
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Craft UI</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={180}
                height={60}
                className="drop-shadow-none	"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Explore and book your ideal journey with expert recommendations,
                travel tips, detailed destination guides, and motivational
                insights from Lonely Planet.
              </Balancer>
            </p>

            <div className="flex gap-2">
              {/* <ModeToggle /> */}
              <Button variant="outline" asChild size="icon">
                <Link href={instagram_link} target="_blank">
                  <Instagram className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Instagram</span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="icon">
                <Link href={facebook_link} target="_blank">
                  <Facebook className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Visit Facebook</span>
                </Link>
              </Button>
            </div>
          </div>
        </Craft.Container>
      </Craft.Section>
    </footer>
  );
};

export default Footer;
