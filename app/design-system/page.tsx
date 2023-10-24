import React from "react";
import styles from "../index.module.css";
import classes from "../utils/classes";

type CSSProps = React.CSSProperties;

export default function DesignSystemPage() {
  return (
    <div className={styles.container} style={{ marginBottom: "50vh" }}>
      <h1
        className={classes(styles.textWhite, styles.uppercase)}
        style={{ marginBottom: "3rem" }}
      >
        Design System
      </h1>

      <section
        id="colors"
        style={{ marginBottom: "3rem" }}
        className={styles.flow}
      >
        <h2 className={styles.numberedTitle}>
          <span>01</span> COLORS
        </h2>

        <div className={styles.flex}>
          <ColorBox
            hex="#0B0D17"
            hsl="230, 35%, 7%"
            rgb="11, 13, 23"
            className={classes(styles.bgDark, styles.textWhite)}
          />
          <ColorBox
            hex="#0B0D17"
            hsl="231, 77%, 90%"
            rgb="208, 214, 249"
            className={classes(styles.bgLight, styles.textDark)}
          />
          <ColorBox
            hex="#FFFFFF"
            hsl="0, 0%, 100%"
            rgb="255, 255, 255"
            className={classes(styles.bgWhite, styles.textDark)}
          />
        </div>
      </section>

      <section
        id="typography"
        style={{ margin: "4rem 0" }}
        className={styles.flow}
      >
        <h2 className={styles.numberedTitle}>
          <span>02 </span>
          Typography
        </h2>
        <div className={styles.flex}>
          <div
            style={
              {
                flexBasis: "100%",
                "--flow-space": "3rem",
              } as CSSProps
            }
            className={styles.flow}
          >
            <div>
              <p className={classes(styles.textLight)}>
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p
                className={classes(
                  styles.fs900,
                  styles.ffSerif,
                  styles.uppercase
                )}
              >
                Earth
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p
                className={classes(
                  styles.fs800,
                  styles.ffSerif,
                  styles.uppercase
                )}
              >
                Venus
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p
                className={classes(
                  styles.fs700,
                  styles.ffSerif,
                  styles.uppercase
                )}
              >
                Jupiter & Saturn
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p
                className={classes(
                  styles.fs600,
                  styles.ffSerif,
                  styles.uppercase
                )}
              >
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p
                className={classes(
                  styles.fs500,
                  styles.uppercase,
                  styles.ffSansCond,
                  styles.letterSpacing1,
                  styles.textLight
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
            className={styles.flow}
          >
            <div>
              <p className={classes(styles.textLight)}>
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p
                className={classes(
                  styles.uppercase,
                  styles.fs500,
                  styles.ffSerif
                )}
              >
                384,400 km
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p
                className={classes(
                  styles.fs200,
                  styles.uppercase,
                  styles.ffSansCond,
                  styles.letterSpacing3
                )}
              >
                Avg. Distance
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p
                className={classes(
                  styles.fs300,
                  styles.uppercase,
                  styles.ffSansCond,
                  styles.letterSpacing2
                )}
              >
                Europa
              </p>
            </div>
            <div>
              <p className={classes(styles.textLight)}>Body Text</p>
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

      <section className={styles.flow} id="interactive-elements">
        <h2 className={styles.numberedTitle}>
          <span>03</span> Interactive Elements
        </h2>

        {/* <!-- navigation --> */}
        <div>
          <nav>
            <ul
              className={classes(
                styles.flex,
                styles.primaryNavigation,
                styles.underlineIndicators
              )}
            >
              <li className={styles.active}>
                <a
                  href="#"
                  className={classes(
                    styles.uppercase,
                    styles.textLight,
                    styles.fs300,
                    styles.letterSpacing2
                  )}
                >
                  <span>00</span> Active
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={classes(
                    styles.uppercase,
                    styles.textLight,
                    styles.fs300,
                    styles.letterSpacing2
                  )}
                >
                  <span>01</span> Hovered
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={classes(
                    styles.uppercase,
                    styles.textLight,
                    styles.fs300,
                    styles.letterSpacing2
                  )}
                >
                  <span>02</span> Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.flex} style={{ "--gap": "3rem" } as CSSProps}>
          <div style={{ marginTop: "5rem" }}>
            {/* <!-- explore button --> */}
            <a
              href="#"
              className={classes(
                styles.largeButton,
                styles.uppercase,
                styles.fs600,
                styles.letterSpacing2,
                styles.bgWhite,
                styles.textDark,
                styles.ffSerif
              )}
            >
              EXPLORE
            </a>
          </div>

          <div
            className={styles.flow}
            style={{ "--flow-space": "4rem" } as CSSProps}
          >
            {/* <!-- Tabs --> */}
            <div
              className={classes(
                styles.flex,
                styles.underlineIndicators,
                styles.tabList
              )}
            >
              <button
                className={classes(
                  styles.uppercase,
                  styles.textLight,
                  styles.letterSpacing2,
                  styles.ffSansCond
                )}
                aria-selected="true"
              >
                Moon
              </button>
              <button
                className={classes(
                  styles.uppercase,
                  styles.textLight,
                  styles.letterSpacing2,
                  styles.ffSansCond
                )}
                aria-selected="false"
              >
                Mars
              </button>
              <button
                className={classes(
                  styles.uppercase,
                  styles.textLight,
                  styles.letterSpacing2,
                  styles.ffSansCond
                )}
                aria-selected="false"
              >
                Europa
              </button>
            </div>

            {/* <!-- Dots --> */}
            <div
              className={classes(styles.flex, styles.dotIndicators)}
              style={{ "--gap": "1rem" } as CSSProps}
            >
              <button aria-selected="true">
                <span className={styles.srOnly}>Slide title</span>
              </button>
              <button aria-selected="false">
                <span className={styles.srOnly}>Slide title</span>
              </button>
              <button aria-selected="false">
                <span className={styles.srOnly}>Slide title</span>
              </button>
            </div>

            {/* <!-- Numbers --> */}
            <div className={classes(styles.numberIndicators, styles.flow)}>
              <button
                aria-selected="true"
                className={classes(
                  styles.ffSerif,
                  styles.bgDark,
                  styles.textWhite,
                  styles.fs500
                )}
              >
                1
              </button>
              <button
                aria-selected="false"
                className={classes(
                  styles.ffSerif,
                  styles.bgDark,
                  styles.textWhite,
                  styles.fs500
                )}
              >
                2
              </button>
              <button
                aria-selected="false"
                className={classes(
                  styles.ffSerif,
                  styles.bgDark,
                  styles.textWhite,
                  styles.fs500
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
      className={styles.flow}
    >
      <div
        style={{
          padding: "3rem 1rem 1rem",
          border: "1px solid white",
        }}
        className={className + " " + classes(styles.ffSerif, styles.fs500)}
      >
        {hex}
      </div>
      <p>
        <span className={styles.textLight} style={{ marginInlineEnd: "3rem" }}>
          RGB
        </span>{" "}
        <span className={styles.textWhite}>{rgb}</span>
      </p>
      <p>
        <span className={styles.textLight} style={{ marginInlineEnd: "3rem" }}>
          HSL
        </span>{" "}
        <span className={styles.textWhite}>{hsl}</span>
      </p>
    </div>
  );
}
