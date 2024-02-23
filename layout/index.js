import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function SideLayout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" ? (
        <>
            <Navbar/>
          <Grid container spacing={2}>
            <Grid item   xs={4} md={2.4}>
              <Sidebar />
            </Grid>

            <Grid item   xs={8} md={9.6}>
              {children}
            </Grid>
          </Grid>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
