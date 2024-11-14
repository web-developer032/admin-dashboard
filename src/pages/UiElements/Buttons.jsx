import { Link } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { cn } from "../../lib/utils";

export const BUTTON_VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "meta-3",
  BLACK: "black",
};

const Button = ({
  children,
  href,
  outlined,
  roundClass,
  variant = BUTTON_VARIANT.PRIMARY,
  classes,
  target = "_self",
}) => {
  const btnStyle = cn(
    "inline-flex items-center justify-center py-4 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10",
    roundClass,
    outlined
      ? `border border-${variant} text-${variant}`
      : `text-white bg-${variant}`,
    classes,
  );

  if (href) {
    return (
      <a href={href} className={btnStyle} target={target}>
        {children}
      </a>
    );
  }
  return <button className={btnStyle}>{children}</button>;
};

const Buttons = () => (
  <>
    <Breadcrumb pageName="Buttons" />

    {/* <!-- Normal Button Items --> */}
    <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Normal Button
        </h3>
      </div>

      <div className="p-4 md:p-6 xl:p-9">
        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button>Button Normal</Button>
          <Button roundClass={"rounded-md"}>Button Rounded Medium</Button>
          <Button roundClass={"rounded-full"}>Button Rounded Full</Button>
          <Button roundClass={"rounded-md"} outlined={true}>
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button variant={BUTTON_VARIANT.SECONDARY}>Button Normal</Button>
          <Button variant={BUTTON_VARIANT.SECONDARY} roundClass={"rounded-md"}>
            Button Rounded Medium
          </Button>
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            roundClass={"rounded-full"}
          >
            Button Rounded Full
          </Button>
          <Button
            variant={BUTTON_VARIANT.SECONDARY}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button variant={BUTTON_VARIANT.TERTIARY}>Button Normal</Button>
          <Button variant={BUTTON_VARIANT.TERTIARY} roundClass={"rounded-md"}>
            Button Rounded Medium
          </Button>
          <Button variant={BUTTON_VARIANT.TERTIARY} roundClass={"rounded-full"}>
            Button Rounded Full
          </Button>
          <Button
            variant={BUTTON_VARIANT.TERTIARY}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button variant={BUTTON_VARIANT.BLACK}>Button Normal</Button>
          <Button variant={BUTTON_VARIANT.BLACK} roundClass={"rounded-md"}>
            Button Rounded Medium
          </Button>
          <Button variant={BUTTON_VARIANT.BLACK} roundClass={"rounded-full"}>
            Button Rounded Full
          </Button>
          <Button
            variant={BUTTON_VARIANT.BLACK}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>
      </div>
    </div>

    {/* <!-- Normal Button Items --> */}
    <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Link Type Button
        </h3>
      </div>

      <div className="p-4 md:p-6 xl:p-9">
        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button href={"#"}>Button Normal</Button>
          <Button href={"#"} roundClass={"rounded-md"}>
            Button Rounded Medium
          </Button>
          <Button href={"#"} roundClass={"rounded-full"}>
            Button Rounded Full
          </Button>
          <Button href={"#"} roundClass={"rounded-md"} outlined={true}>
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button href={"#"} variant={BUTTON_VARIANT.SECONDARY}>
            Button Normal
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.SECONDARY}
            roundClass={"rounded-md"}
          >
            Button Rounded Medium
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.SECONDARY}
            roundClass={"rounded-full"}
          >
            Button Rounded Full
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.SECONDARY}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button href={"#"} variant={BUTTON_VARIANT.TERTIARY}>
            Button Normal
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.TERTIARY}
            roundClass={"rounded-md"}
          >
            Button Rounded Medium
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.TERTIARY}
            roundClass={"rounded-full"}
          >
            Button Rounded Full
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.TERTIARY}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>

        <div className="mb-7.5 flex flex-wrap gap-3">
          <Button href={"#"} variant={BUTTON_VARIANT.BLACK}>
            Button Normal
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.BLACK}
            roundClass={"rounded-md"}
          >
            Button Rounded Medium
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.BLACK}
            roundClass={"rounded-full"}
          >
            Button Rounded Full
          </Button>
          <Button
            href={"#"}
            variant={BUTTON_VARIANT.BLACK}
            roundClass={"rounded-md"}
            outlined={true}
          >
            Button Outlined Medium
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default Buttons;
