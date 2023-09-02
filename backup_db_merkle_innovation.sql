--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: guest_form; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.guest_form (
    id integer NOT NULL,
    nama character varying(100),
    alamat character varying(255),
    nomor_telepon character varying(100),
    catatan text
);


ALTER TABLE public.guest_form OWNER TO postgres;

--
-- Name: guest_form_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.guest_form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guest_form_id_seq OWNER TO postgres;

--
-- Name: guest_form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.guest_form_id_seq OWNED BY public.guest_form.id;


--
-- Name: user_tamu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_tamu (
    id integer NOT NULL,
    username character varying(100),
    password character varying(255)
);


ALTER TABLE public.user_tamu OWNER TO postgres;

--
-- Name: user_tamu_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_tamu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_tamu_id_seq OWNER TO postgres;

--
-- Name: user_tamu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_tamu_id_seq OWNED BY public.user_tamu.id;


--
-- Name: guest_form id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guest_form ALTER COLUMN id SET DEFAULT nextval('public.guest_form_id_seq'::regclass);


--
-- Name: user_tamu id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_tamu ALTER COLUMN id SET DEFAULT nextval('public.user_tamu_id_seq'::regclass);


--
-- Data for Name: guest_form; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.guest_form (id, nama, alamat, nomor_telepon, catatan) FROM stdin;
1	asdla	kjals jd	0192783	hello
2	Rehan	Thomang	0192783	Selamat Menikah
3	Rehan Novirma	Thomang	0192783	Selamat Menikah
\.


--
-- Data for Name: user_tamu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_tamu (id, username, password) FROM stdin;
1	Merkle	$2b$10$jegfGEI6MMbA/NQHA1slzup5QZ8SUtSKq5jRVSM86Xv6uB05uyf2O
2	Merkle2	$2b$10$F/2g7qJWg2vMcie4Bi3KEuAOBPAbcLi85SoAezaDUWCK2eA0N3Wf6
3	Merkle3	$2b$10$liChrw50lWiZDkUowR4yeOX2uSshS0hU0xRUI9Bfpk/m3M9eU3sd2
4	admin	$2b$10$V5YVhE79rvjmY28nCi3CBeq5P1krQxUVKQNy40smeU9C3gv/cYJHO
\.


--
-- Name: guest_form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.guest_form_id_seq', 3, true);


--
-- Name: user_tamu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_tamu_id_seq', 4, true);


--
-- Name: guest_form guest_form_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guest_form
    ADD CONSTRAINT guest_form_pkey PRIMARY KEY (id);


--
-- Name: user_tamu user_tamu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_tamu
    ADD CONSTRAINT user_tamu_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

