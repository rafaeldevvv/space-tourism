import React from "react";
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import classes from "../utils/classes";

type CSSProps = React.CSSProperties;

export default function DesignSystemPage() {
  return (
    <div className={utilityClasses.container} style={{ marginBottom: "50vh" }}>
      <h1
        className={classes(utilityClasses.textWhite, utilityClasses.uppercase)}
        style={{ marginBottom: "3rem" }}
      >
        Design System
      </h1>

      <section
        id="colors"
        style={{ marginBottom: "3rem" }}
        className={utilityClasses.flow}
      >
        <h2 className={utilityClasses.numberedTitle}>
          <span>01</span> COLORS
        </h2>

        <div className={utilityClasses.flex}>
          <ColorBox
            hex="#0B0D17"
            hsl="230, 35%, 7%"
            rgb="11, 13, 23"
            className={classes(utilityClasses.bgDark, utilityClasses.textWhite)}
          />
          <ColorBox
            hex="#0B0D17"
            hsl="231, 77%, 90%"
            rgb="208, 214, 249"
            className={classes(utilityClasses.bgLight, utilityClasses.textDark)}
          />
          <ColorBox
            hex="#FFFFFF"
            hsl="0, 0%, 100%"
            rgb="255, 255, 255"
            className={classes(utilityClasses.bgWhite, utilityClasses.textDark)}
          />
        </div>
      </section>

      <section
        id="typography"
        style={{ margin: "4rem 0" }}
        className={utilityClasses.flow}
      >
        <h2 className={utilityClasses.numberedTitle}>
          <span>02 </span>
          Typography
        </h2>
        <div className={utilityClasses.flex}>
          <div
            style={
              {
                flexBasis: "100%",
                "--flow-space": "3rem",
              } as CSSProps
            }
            className={utilityClasses.flow}
          >
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p
                className={classes(
                  utilityClasses.fs900,
                  utilityClasses.ffSerif,
                  utilityClasses.uppercase
                )}
              >
                Earth
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p
                className={classes(
                  utilityClasses.fs800,
                  utilityClasses.ffSerif,
                  utilityClasses.uppercase
                )}
              >
                Venus
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p
                className={classes(
                  utilityClasses.fs700,
                  utilityClasses.ffSerif,
                  utilityClasses.uppercase
                )}
              >
                Jupiter & Saturn
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p
                className={classes(
                  utilityClasses.fs600,
                  utilityClasses.ffSerif,
                  utilityClasses.uppercase
                )}
              >
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p
                className={classes(
                  utilityClasses.fs500,
                  utilityClasses.uppercase,
                  utilityClasses.ffSansCond,
                  utilityClasses.letterSpacing1,
                  utilityClasses.textLight
                )}
              >
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            style={
              {
                flexBasis: "100%",
                "--flow-space": "3rem",
              } as CSSProps
            }
            className={utilityClasses.flow}
          >
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p
                className={classes(
                  utilityClasses.uppercase,
                  utilityClasses.fs500,
                  utilityClasses.ffSerif
                )}
              >
                384,400 km
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p
                className={classes(
                  utilityClasses.fs200,
                  utilityClasses.uppercase,
                  utilityClasses.ffSansCond,
                  utilityClasses.letterSpacing3
                )}
              >
                Avg. Distance
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p
                className={classes(
                  utilityClasses.fs300,
                  utilityClasses.uppercase,
                  utilityClasses.ffSansCond,
                  utilityClasses.letterSpacing2
                )}
              >
                Europa
              </p>
            </div>
            <div>
              <p className={classes(utilityClasses.textLight)}>Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={utilityClasses.flow} id="interactive-elements">
        <h2 className={utilityClasses.numberedTitle}>
          <span>03</span> Interactive Elements
        </h2>

        {/* <!-- navigation --> */}
        <div>
          <nav>
            <ul
              className={classes(
                utilityClasses.flex,
                utilityClasses.primaryNavigation,
                componentsStyles.underlineIndicators
              )}
            >
              <li className={utilityClasses.active}>
                <a
                  href="#"
                  className={classes(
                    utilityClasses.uppercase,
                    utilityClasses.textLight,
                    utilityClasses.fs300,
                    utilityClasses.letterSpacing2
                  )}
                >
                  <span>00</span> Active
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={classes(
                    utilityClasses.uppercase,
                    utilityClasses.textLight,
                    utilityClasses.fs300,
                    utilityClasses.letterSpacing2
                  )}
                >
                  <span>01</span> Hovered
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={classes(
                    utilityClasses.uppercase,
                    utilityClasses.textLight,
                    utilityClasses.fs300,
                    utilityClasses.letterSpacing2
                  )}
                >
                  <span>02</span> Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={utilityClasses.flex} style={{ "--gap": "3rem" } as CSSProps}>
          <div style={{ marginTop: "5rem" }}>
            {/* <!-- explore button --> */}
            <a
              href="#"
              className={classes(
                componentsStyles.largeButton,
                utilityClasses.uppercase,
                utilityClasses.fs600,
                utilityClasses.letterSpacing2,
                utilityClasses.bgWhite,
                utilityClasses.textDark,
                utilityClasses.ffSerif
              )}
            >
              EXPLORE
            </a>
          </div>

          <div
            className={utilityClasses.flow}
            style={{ "--flow-space": "4rem" } as CSSProps}
          >
            {/* <!-- Tabs --> */}
            <div
              className={classes(
                utilityClasses.flex,
                componentsStyles.underlineIndicators,
                utilityClasses.tabList
              )}
            >
              <button
                className={classes(
                  utilityClasses.uppercase,
                  utilityClasses.textLight,
                  utilityClasses.letterSpacing2,
                  utilityClasses.ffSansCond
                )}
                aria-selected="true"
              >
                Moon
              </button>
              <button
                className={classes(
                  utilityClasses.uppercase,
                  utilityClasses.textLight,
                  utilityClasses.letterSpacing2,
                  utilityClasses.ffSansCond
                )}
                aria-selected="false"
              >
                Mars
              </button>
              <button
                className={classes(
                  utilityClasses.uppercase,
                  utilityClasses.textLight,
                  utilityClasses.letterSpacing2,
                  utilityClasses.ffSansCond
                )}
                aria-selected="false"
              >
                Europa
              </button>
            </div>

            {/* <!-- Dots --> */}
            <div
              className={classes(utilityClasses.flex, componentsStyles.dotIndicators)}
              style={{ "--gap": "1rem" } as CSSProps}
            >
              <button aria-selected="true">
                <span className={utilityClasses.srOnly}>Slide title</span>
              </button>
              <button aria-selected="false">
                <span className={utilityClasses.srOnly}>Slide title</span>
              </button>
              <button aria-selected="false">
                <span className={utilityClasses.srOnly}>Slide title</span>
              </button>
            </div>

            {/* <!-- Numbers --> */}
            <div className={classes(componentsStyles.numberIndicators, utilityClasses.flow)}>
              <button
                aria-selected="true"
                className={classes(
                  utilityClasses.ffSerif,
                  utilityClasses.bgDark,
                  utilityClasses.textWhite,
                  utilityClasses.fs500
                )}
              >
                1
              </button>
              <button
                aria-selected="false"
                className={classes(
                  utilityClasses.ffSerif,
                  utilityClasses.bgDark,
                  utilityClasses.textWhite,
                  utilityClasses.fs500
                )}
              >
                2
              </button>
              <button
                aria-selected="false"
                className={classes(
                  utilityClasses.ffSerif,
                  utilityClasses.bgDark,
                  utilityClasses.textWhite,
                  utilityClasses.fs500
                )}
              >
                3
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ColorBox({
  hsl,
  rgb,
  hex,
  className,
}: {
  hsl: string;
  rgb: string;
  hex: string;
  className: string;
}) {
  return (
    <div
      style={{ flexGrow: "1", "--flow-space": ".5em" } as CSSProps}
      className={utilityClasses.flow}
    >
      <div
        style={{
          padding: "3rem 1rem 1rem",
          border: "1px solid white",
        }}
        className={className + " " + classes(utilityClasses.ffSerif, utilityClasses.fs500)}
      >
        {hex}
      </div>
      <p>
        <span className={utilityClasses.textLight} style={{ marginInlineEnd: "3rem" }}>
          RGB
        </span>{" "}
        <span className={utilityClasses.textWhite}>{rgb}</span>
      </p>
      <p>
        <span className={utilityClasses.textLight} style={{ marginInlineEnd: "3rem" }}>
          HSL
        </span>{" "}
        <span className={utilityClasses.textWhite}>{hsl}</span>
      </p>
    </div>
  );
}
