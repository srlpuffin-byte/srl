import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/home";
import Servicios from "@/pages/servicios";
import Importacion from "@/pages/importacion";
import Exportacion from "@/pages/exportacion";
import Nosotros from "@/pages/nosotros";
import Catalogo from "@/pages/catalogo";
import Contacto from "@/pages/contacto";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/importacion" component={Importacion} />
        <Route path="/exportacion" component={Exportacion} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/contacto" component={Contacto} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
