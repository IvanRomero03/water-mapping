import React from "react";
import "./App.css";
import useRef, { useState } from "react";
import styles from "./styles/Home.module.css";
import { Tabs, Text, Box, Checkbox, Divider } from "@mantine/core";
import GoogleHeatMap from "./components/GoogleHeatMap";
import AzureLayer from "./components/AzureLayer";

function App() {
  const [checked, setChecked] = useState<string | string[]>("escob");
  console.log(checked);
  return (
    <>
      <Tabs color="dark" defaultValue="Home">
        <Tabs.List>
          <Tabs.Tab value="Home">
            <Text color={"dark"}>Home</Text>
          </Tabs.Tab>
          <Tabs.Tab value="Presion">
            <Text color={"dark"}>Presion</Text>
          </Tabs.Tab>
          <Tabs.Tab value="Calidad">
            <Text color={"dark"}>Calidad</Text>
          </Tabs.Tab>
          <Tabs.Tab value="Precipitacion">
            <Text color={"dark"}>Precipitacion</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Home" pt="xs">
          <div className={styles.container}>
            <head>
              <title>ORG NAME</title>
              <meta
                name="description"
                content="Water managmanet and identification"
              />
              <link rel="icon" href="/favicon.ico" />
            </head>

            <main className={styles.main}>
              <h1 className={styles.title}>NOMBRE ORG</h1>

              <p className={styles.description}>
                Borregos Operating System (BOS)
              </p>

              <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h2>Modelo de IA &rarr;</h2>
                  <p>
                    Utilizamos un modelo de inteligancia artificial el cual es
                    capaz de predecir la calidad del agua a partir de diferentes
                    variables
                  </p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                  <h2>Sensores &rarr;</h2>
                  <p>
                    Descubran los sensores utilizados, los cuales miden las
                    particulas por millon y el flujo del agua, para que este
                    proyecto fuese posible
                  </p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  className={styles.card}
                >
                  <h2>Examples &rarr;</h2>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </a>
              </div>
            </main>

            <footer className={styles.footer}>
              <a
                href="https://hackmty.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by HackMTY
              </a>
            </footer>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="Presion" pt="xs">
          <Checkbox.Group
            defaultValue={["allpoints"]}
            label="Puntos de medición"
            description="Seleccione los puntos de medición que desea visualizar"
            onChange={(value) => setChecked(value)}
          >
            <Checkbox value="allpoints" label="Todos los puntos" />
            <Checkbox value="escob" label="Escobedo" />
            <Checkbox value="sanped" label="San Pedro" />
            <Checkbox value="sannico" label="San Nicolas" />
            <Checkbox value="monterrey" label="Monterrey" />
            <Checkbox value="apoda" label="Apodaca" />
            <Checkbox value="cumb" label="Cumbres" />
            <Checkbox value="sant" label="Santiago" />
            <Checkbox value="guad" label="Guadalupe" />
          </Checkbox.Group>

          <Divider size={20} />

          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              textAlign: "center",
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
              },
            })}
          >
            AGREGRAR HEATMAP
            <AzureLayer />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="Calidad" pt="xs">
          <Checkbox.Group
            defaultValue={["allpoints"]}
            label="Puntos de medición"
            description="Seleccione los puntos de medición que desea visualizar"
            onChange={(value) => setChecked(value)}
          >
            <Checkbox value="allpoints" label="Todos los puntos" />
            <Checkbox value="escob" label="Escobedo" />
            <Checkbox value="sanped" label="San Pedro" />
            <Checkbox value="sannico" label="San Nicolas" />
            <Checkbox value="monterrey" label="Monterrey" />
            <Checkbox value="apoda" label="Apodaca" />
            <Checkbox value="cumb" label="Cumbres" />
            <Checkbox value="sant" label="Santiago" />
            <Checkbox value="guad" label="Guadalupe" />
          </Checkbox.Group>

          <Divider size={20} />

          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              textAlign: "center",
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
              },
            })}
          >
            AGREGRAR HEATMAP
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="Precipitacion" pt="xs">
          <Checkbox.Group
            defaultValue={["allpoints"]}
            label="Puntos de medición"
            description="Seleccione los puntos de medición que desea visualizar"
            onChange={(value) => setChecked(value)}
          >
            <Checkbox value="allpoints" label="Todos los puntos" />
            <Checkbox value="escob" label="Escobedo" />
            <Checkbox value="sanped" label="San Pedro" />
            <Checkbox value="sannico" label="San Nicolas" />
            <Checkbox value="monterrey" label="Monterrey" />
            <Checkbox value="apoda" label="Apodaca" />
            <Checkbox value="cumb" label="Cumbres" />
            <Checkbox value="sant" label="Santiago" />
            <Checkbox value="guad" label="Guadalupe" />
          </Checkbox.Group>

          <Divider size={20} />

          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              textAlign: "center",
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
              },
            })}
          ></Box>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

export default App;
