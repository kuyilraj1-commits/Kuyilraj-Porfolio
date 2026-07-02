import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Film,
  Clapperboard,
  Megaphone,
  TrendingUp,
  Users,
  Zap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Heart,
  Palette,
  Type,
  Video,
  Layers,
  BarChart3,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import heroVideo from "@/assets/hero-action.mp4.asset.json";
import videoPoster from "@/assets/video-poster.jpg.asset.json";
import reelPolitical from "@/assets/reel-political.jpg.asset.json";
import reelPolicy from "@/assets/reel-policy.jpg.asset.json";
import reelShop from "@/assets/reel-shop.jpg.asset.json";
import commercialRestaurant from "@/assets/commercial-restaurant.jpg.asset.json";
import commercialRetail from "@/assets/commercial-retail.jpg.asset.json";
import commercialCampaign from "@/assets/commercial-campaign.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuyilraj— Video Editor & Digital Content Strategist" },
      {
        name: "description",
        content:
          "Portfolio of Kuyilraj, a freelance video editor and digital content strategist specializing in short-form reels, commercial ads, and political campaign content.",
      },
      {
        property: "og:title",
        content: "Kuyilraj — Video Editor & Digital Content Strategist",
      },
      {
        property: "og:description",
        content:
          "High-impact short-form reels, commercial ads, and political campaign videos that drive engagement and conversion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Reels", href: "#reels" },
  /* Commercials nav removed per request */
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <VideoShowcase />
        <ReelsSection />
        {/* Commercials section removed; videos merged into Reels */}
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Film className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Kuyilraj<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Hire Me
          </Button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Badge
          variant="outline"
          className="mb-6 border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-primary backdrop-blur-sm"
        >
          <Zap className="mr-2 h-3 w-3" />
          Available for freelance projects
        </Badge>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Where raw clips become powerful
          <span className="block text-primary">visual stories</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
          Studio-grade editing, campaign-ready motion, and digital content strategy designed to
          retain attention and convert viewers into customers.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#contact">
              Start Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 px-8 text-foreground hover:bg-white/10"
            asChild
          >
            <a href="#reels">View Showcase</a>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-card/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">
                Years of editing
              </span>
            </div>
            <p className="text-3xl font-semibold text-foreground">1.5+</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-card/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <Clapperboard className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">
                Projects delivered
              </span>
            </div>
            <p className="text-3xl font-semibold text-foreground">100+</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-card/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">
                Client return rate
              </span>
            </div>
            <p className="text-3xl font-semibold text-foreground">94%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  return (
    <section className="relative px-6 py-12">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[900px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Cinematic Work
          </h2>
          <p className="mt-2 text-muted-foreground">
            A taste of the pacing, color, and energy I bring to every project.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card glow-blue">
          <video
            ref={videoRef}
            poster={videoPoster.url}
            className="aspect-video w-full object-cover"
            muted={isMuted}
            playsInline
            preload="metadata"
          >
            <source src="/videos/cinematic.mp4" type="video/mp4" />
            <source src="/videos/cinematic.mp4" type="video/mp4" />
          </video>

          {/* Custom overlay controls */}
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex justify-end">
              <button
                onClick={toggleFullscreen}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Toggle fullscreen"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              <button
                onClick={toggleMute}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              <div className="flex-1">
                <div className="h-1 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center play button when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
              aria-label="Play video"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl backdrop-blur-sm transition-transform hover:scale-105">
                <Play className="ml-1 h-8 w-8" />
              </div>
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Clapperboard className="h-4 w-4 text-primary" /> Cinematic action reel
            </span>
            <span className="flex items-center gap-2">
              <Video className="h-4 w-4 text-primary" /> 1080p
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
            Demo footage
          </span>
        </div>
      </div>
    </section>
  );
}

const reels = [
  {
    title: "Political Campaign - P. Sathiyabama",
    category: "Political Campaign - P. Sathiyabama",
    platform: "Instagram Reel",
    description:
      "Political campaign edit with clean graphics, crisp subtitling, and a professional flow.",
    image: reelPolitical.url,
    video: "/videos/political-compaign.mp4",
    tags: ["Hook-first", "Trending audio", "Motion text"],
  },
  {
    title: "MG Squad - Editor Hiring Call",
    category: "Political Campaign - P. Sathiyabama",
    platform: "Instagram Reel",
    description:
      "High-retention talking-head edit with fast cuts, pop-ups, SFX, and clean typography.",
    image: reelPolicy.url,
    video: "/videos/madan-storytelling.mp4",
    tags: ["Kinetic type", "Color grade", "Retention hook"],
  },
  {
    title: "Makil Dress Studio",
    category: "Commercial",
    platform: "Instagram Reel",
    description:
      "Elegant fashion promo edit with seamless fabric transitions and cinematic close-ups.",
    image: reelShop.url,
    video: "/videos/localshop.mp4",
    tags: ["CTA design", "B-roll", "Trending format"],
  },
  {
    title: "Men's Body Care Product",
    category: "Influencer",
    platform: "Instagram Reel",
    description: "Fast-paced skincare edit with bold text animations, split-screens, and high-retention hooks",
    image: reelShop.url,
    video: "/videos/influencer-edit.mp4",
    tags: ["Creator-first", "Brand sync", "Short-form"],
  },
  {
    title: "Cafe Promo Edit",
    category: "Commercial Ad",
    platform: "Social Media Ad",
    description:
      "Dynamic cafe promo edit with sync beats, fast food reveals, and cozy ambiance shots.",
    image: commercialRestaurant.url,
    video: "/videos/cafe-edit.mp4",
    tags: ["Food styling", "Ad optimization", "CTR"],
  },
  {
    title: "Sri Vijaya Catering",
    category: "Political Campaign - P. Sathiyabama",
    platform: "Commercial Ad",
    description:
      "Vibrant event promo featuring premium catering, beautiful decor, and high-energy crowd highlights.",
    image: commercialCampaign.url,
    video: "/videos/cinematic-reel.mp4",
    tags: ["Storytelling", "Color grade", "Impact"],
  },
];

function ReelsSection() {
  return (
    <section id="reels" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary"
            >
              <Zap className="mr-2 h-3 w-3" /> Reels
            </Badge>
            {/* Title removed per request */}
          </div>
          <Button
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground"
          >
            View Showcase <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <ProjectCard key={reel.title} project={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Commercials data and section removed; videos merged into `reels` and CommercialsSection invocation removed from Index. */

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    category: string;
    platform: string;
    description: string;
    image: string;
    tags: string[];
    video?: string;
  };
}) {
  const hasVideo = Boolean(project.video);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[9/16] overflow-hidden bg-muted/20">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            controls
            playsInline
            preload="metadata"
            onClick={handleTogglePlay}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {hasVideo && !isPlaying && (
          <button
            type="button"
            onClick={handleTogglePlay}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
            aria-label={`Play ${project.title}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl backdrop-blur-sm">
              <Play className="ml-1 h-6 w-6" />
            </div>
          </button>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-5">
        <h3 className="mt-1 font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-white/10 bg-white/5 text-xs font-normal text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

const skills = [
  { name: "Video Editing", icon: Video, desc: "CapCut workflows & Davinci Resolve basics" },
  { name: "Color Grading", icon: Palette, desc: "Cinematic tone & consistency" },
  { name: "Kinetic Typography", icon: Type, desc: "Motion text & subtitling" },
  { name: "Short-form Strategy", icon: TrendingUp, desc: "Retention hooks & trends" },
  { name: "Production Direction", icon: Clapperboard, desc: "Scripting, B-roll, lighting" },
  { name: "Analytics & CTR", icon: BarChart3, desc: "Data-driven content optimization" },
  { name: "Bilingual Content", icon: Globe, desc: "English & Tamil / Thanglish" },
  { name: "Layered Compositing", icon: Layers, desc: "Multi-layer motion graphics" },
];

function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary"
          >
            <Layers className="mr-2 h-3 w-3" /> Toolkit
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Tools
          </h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            The full editing, strategy, and production stack behind every project.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{skill.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary"
            >
              <Users className="mr-2 h-3 w-3" /> About
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Data-driven editing for high-retention social content
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I&apos;m Kuyilraj, a digital content strategist and video editor with over 1.5 years of experience delivering high-impact visual assets. I specialize in bridging audience psychology with fast-paced post-production to create scroll-stopping Instagram Reels, YouTube Shorts, and commercial advertisements that convert viewers into active customers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every project blends pacing, motion design, and platform-first storytelling to keep
              audiences watching and encourage action.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Megaphone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Campaign-Proven Results</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                From managing real-time video strategies for victorious MLA election campaigns to delivering high-stakes political assets under tight deadlines.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Local Business Growth</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                End-to-end production for commercial shops—scripting, directing on-site shoots, and structuring clear CTAs that directly boost foot traffic.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Bilingual Engagement</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Crafting sharp visual hooks, kinetic typography, and seamless cross-lingual audio adaptation tailored specifically for English and Tamil/Thanglish audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl sm:p-12">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-primary"
            >
              <Mail className="mr-2 h-3 w-3" /> Contact
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something that moves people
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
              Ready for reels, ads, or editing projects? Drop a message and I&apos;ll get back to
              you within 24 hours.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <a
              href="mailto:kuyilraj1@gmail.com"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">kuyilraj1@gmail.com</span>
            </a>
            <a
              href="tel:+918590881058"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">+91 85908 81058</span>
            </a>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">Pollachi, Tamil Nadu</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:kuyilraj1@gmail.com">Start a Project</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/30 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Film className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold">
            Kuyilraj<span className="text-primary">.</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kuyilraj E. Video Editor & Digital Content Strategist.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:kuyilraj1@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
