-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: projet-ajc
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinema`
--

DROP TABLE IF EXISTS `cinema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema`
--

LOCK TABLES `cinema` WRITE;
/*!40000 ALTER TABLE `cinema` DISABLE KEYS */;
INSERT INTO `cinema` VALUES (1,'../assets/images/cinema/cine1.jpg','Cinema UGC',0),(2,'../assets/images/cinema/cine2.jpg','Cinema Royal',0);
/*!40000 ALTER TABLE `cinema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinema_extra`
--

DROP TABLE IF EXISTS `cinema_extra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinema_extra` (
  `cinema_id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix` double NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  KEY `FKjtbwimab9y12csfpakpi50ffr` (`cinema_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema_extra`
--

LOCK TABLES `cinema_extra` WRITE;
/*!40000 ALTER TABLE `cinema_extra` DISABLE KEYS */;
INSERT INTO `cinema_extra` VALUES (1,'Coca-Cola',5,'boisson'),(1,'Orangina',4,'boisson'),(1,'Mars',3,'nourriture'),(2,'Coca-Cola',5,'boisson'),(2,'Sprite',6,'boisson'),(2,'Fanta',4,'boisson'),(2,'Bonbons',4,'nourriture'),(2,'Mars',3,'nourriture'),(2,'Bounty',3,'nourriture');
/*!40000 ALTER TABLE `cinema_extra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinema_film`
--

DROP TABLE IF EXISTS `cinema_film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinema_film` (
  `film_id` int(11) NOT NULL,
  `cinema_id` int(11) NOT NULL,
  KEY `FK5196pwrfsdyym49xhim0r2tdc` (`cinema_id`),
  KEY `FK725w6yx6vncptmn57ccgu5m5h` (`film_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema_film`
--

LOCK TABLES `cinema_film` WRITE;
/*!40000 ALTER TABLE `cinema_film` DISABLE KEYS */;
INSERT INTO `cinema_film` VALUES (1,1),(2,1),(3,1),(4,1),(15,1),(14,1),(12,1),(9,1),(7,1),(1,2),(2,2),(6,2),(4,2),(7,2),(14,2),(8,2),(9,2),(11,2);
/*!40000 ALTER TABLE `cinema_film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinema_infos`
--

DROP TABLE IF EXISTS `cinema_infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinema_infos` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema_infos`
--

LOCK TABLES `cinema_infos` WRITE;
/*!40000 ALTER TABLE `cinema_infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cinema_infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `cp` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'99999','2022-01-20','aa@aa.com','aa','123','aa',1);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_commande`
--

DROP TABLE IF EXISTS `client_commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_commande` (
  `client_id` int(11) NOT NULL,
  `commande_extra` varchar(255) DEFAULT NULL,
  `commande_place` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `prix_total` double NOT NULL,
  KEY `FKbyb17cyo1wf8ntxygw18jdgx1` (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_commande`
--

LOCK TABLES `client_commande` WRITE;
/*!40000 ALTER TABLE `client_commande` DISABLE KEYS */;
INSERT INTO `client_commande` VALUES (1,'Coca-Cola-2-10;','1-Plein tarif-2-9.6',0,19.6);
/*!40000 ALTER TABLE `client_commande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `duree` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `limite_age` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `synopsis` varchar(255) DEFAULT NULL,
  `version` int(11) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (1,'2021-10-12','138','Action','../assets/images/spiderman.jpg','12','Spider-Man : No way Home','Pour la première fois dans son histoire cinématographique, Spider-Man, le héros sympa du quartier est démasqué...',0,'https://www.youtube.com/embed/EFTJtAwsVfY'),(2,'2021-10-22','148','Science-fiction','../assets/images/matrix.jpg','16','Matrix Resurrections','La réalisatrice visionnaire Lana Wachowski signe MATRIX RESURRECTIONS, quatrième opus de la saga révolutionnaire qui a réinventé le genre de la science-fiction...',0,'https://www.youtube.com/embed/9ix7TUGVYIo'),(3,'2021-10-22','135','Action','../assets/images/355.jpg','12','355','Une arme technologique capable de prendre le contrôle de réseaux informatiques tombe entre de mauvaises mains. Lesrenseignements du monde entier envoient leurs agentes les plus redoutables.',0,'https://www.youtube.com/embed/MyktpXSvjZE'),(4,'2021-12-22','110','Animation','../assets/images/tousEnScene.jpg','3','Tous en scène 2','Si Buster et sa troupe ont fait du Nouveau Théâtre Moon la salle de concert à la mode, il est temps de voir les choses en plus grand : monter un nouveau spectacle dans la prestigieuse salle du théâtre de la Crystal Tower à Redshore City.',0,'https://www.youtube.com/embed/jjcp-7SS1Dk'),(5,'2022-01-05','125','Romance','../assets/images/bojangles.jpg','12','Bojangles','Adaptation du roman éponyme signé Olivier Bourdeaut. Camille et Georges dansent tout le temps sur leur chanson préférée Mr Bojangles. Chez eux, il n\'y a de place que pour le plaisir, la fantaisie et les amis.',0,'https://www.youtube.com/embed/fOHZVK9AHaQ'),(6,'2022-01-12','114','Drame','../assets/images/AdieuMonsieurHaffmann.jpg','12','Adieu Monsieur Haffmann','Paris 1941. François Mercier est un homme ordinaire qui n aspire qu à fonder une famille avec la femme qu il aime, Blanche. Il est aussi l employé d un joaillier talentueux, M. Haffmann. ',0,'https://www.youtube.com/embed/sDRankmsjG8'),(7,'2016-05-25','126','Thriller','../assets/images/elle.jpg','16','Elle','Michèle fait partie de ces femmes que rien ne semble atteindre. À la tête d une grande entreprise de jeux vidéo, elle gère ses affaires comme sa vie sentimentale : d une main de fer.',0,'https://www.youtube.com/embed/gM96ne-XiH0'),(8,'2021-11-24','102','Animation','../assets/images/encanto.jpg','3','Encanto, la fantastique famille Madrigal','Dans un mystérieux endroit niché au coeur des montagnes de Colombie, la fantastique famille Madrigal habite une maison enchantée dans une cité pleine de vie, un endroit merveilleux appelé Encanto.',0,'https://www.youtube.com/embed/bdH6itLQ9-0'),(9,'2021-12-29','132','Action','../assets/images/kingsman.jpg','12','The King s Man : première mission','Lorsque les pires tyrans et génies criminels de l Histoire se réunissent pour planifier l élimination de millions d innocents, un homme se lance dans une course contre la montre pour contrecarrer leurs plans. ',0,'https://www.youtube.com/embed/kxyZ4HwpLEg'),(10,'1962-04-18','90','Comedie','../assets/images/laGuerreDesBoutons.jpg','3','La guerre des boutons','Entre les enfants de deux villages voisins, les Longevernes menés par Lebrac et les Velrans, menés par l Aztec, c est la guerre. Mais le jour où les Velrans apostrophent Grangibus et Tigibus, la guerre prend un tour nouveau. ',0,'https://www.youtube.com/embed/SrAgA-wEJh8'),(11,'2021-12-01','144','Drame','../assets/images/laMethodeWilliams.jpg','3','La méthode Williams','Focus sur la personnalité de l entraîneur de tennis Richard Williams, père des joueuses mondiales Vénus et Serena. Il n avait aucune expérience dans le sport mais, il a élaboré un plan de 78 pages décrivant l entraînement des futures championnes. ',0,'https://www.youtube.com/embed/wEDuTxKaMTI'),(12,'2013-12-04','102','Animation','../assets/images/laReineDesNeiges.jpg','3','La reine des neiges','Anna, une jeune fille aussi audacieuse qu optimiste, se lance dans un incroyable voyage en compagnie de Kristoff, et de son fidèle renne, Sven. A la recherche de sa soeur, Elsa, a plongé le royaume d Arendelle dans un hiver éternel',0,'https://www.youtube.com/embed/uyP70r9PS6A'),(13,'2021-06-09','98','Comedie','../assets/images/leDiscours.jpg','3','Le discours','Le film fait partie de la Sélection Officielle Cannes 2020. Adrien est coincé. Coincé à un dîner de famille où papa ressort la même anecdote que d habitude, maman ressert le sempiternel gigot et Sophie écoute son futur mari comme s il était Einstein. ',0,'https://www.youtube.com/embed/GodG-ky2JlM'),(14,'2022-12-29','79','Comedie','../assets/images/leTest.jpg','3','Le test','Annie Castillon est heureuse. Sa vie conjugale avec Laurent est un exemple d harmonie. Ses deux grands, Maximilien et César sont des garçons brillants et sensibles.',0,'https://www.youtube.com/embed/b1r_UR5-0tY'),(15,'2021-10-06','163','Action','../assets/images/mourirPeutAttendre.jpg','12','Mourir peut attendre','James Bond a quitté les services secrets et coule des jours heureux en Jamaïque. Mais sa tranquillité est de courte durée car son vieil ami Felix Leiter de la CIA débarque pour solliciter son aide.',0,'https://www.youtube.com/embed/Q0EiAfDmqx0'),(16,'2022-12-12','115','Horreur','../assets/images/scream.jpg','16','Scream','Vingt-cinq ans après que la paisible ville de Woodsboro a été frappée par une série de meurtres violents, un nouveau tueur revêt le masque de Ghostface et prend pour cible un groupe d adolescents.',0,'https://www.youtube.com/embed/1QvVPKp3N00'),(17,'2022-12-29','105','Drame','../assets/images/tromperie.jpg','12','Tromperie','Adaptation de Tromperie (Deception) de Philip Roth (1994).Londres - 1987. Philip est un écrivain américain célèbre exilé à Londres. Sa maîtresse vient régulièrement le retrouver dans son bureau, qui est le refuge des deux amants.',0,'https://www.youtube.com/embed/o8SXr7pbC3M');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (2);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seance` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `horaire` varchar(255) DEFAULT NULL,
  `pdispos` int(11) NOT NULL,
  `prest` int(11) NOT NULL,
  `version` int(11) NOT NULL,
  `cinema_id` int(11) DEFAULT NULL,
  `film_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp28kgyjrwguokjh8gngcvxy14` (`cinema_id`),
  KEY `FKchlcmip8ejlfuo4c990k5ry8y` (`film_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seance`
--

LOCK TABLES `seance` WRITE;
/*!40000 ALTER TABLE `seance` DISABLE KEYS */;
INSERT INTO `seance` VALUES (1,'2022-01-22','10h35',150,97,0,1,1),(2,'2022-01-22','12h50',150,56,0,1,1),(3,'2022-01-22','14h45',150,10,0,1,1),(4,'2022-01-22','17h55',150,0,0,1,1),(5,'2022-01-22','20h30',150,15,0,1,1),(6,'2022-01-22','13h10',200,198,0,1,2),(7,'2022-01-22','15h20',200,170,0,1,2),(8,'2022-01-22','17h30',200,120,0,1,2),(9,'2022-01-22','19h40',200,15,0,1,2),(10,'2022-01-22','21h50',200,105,0,1,2),(11,'2022-01-22','10h35',150,97,0,2,3),(12,'2022-01-22','12h50',150,56,0,2,3),(13,'2022-01-22','14h45',150,10,0,2,3),(14,'2022-01-22','17h55',150,0,0,2,3),(15,'2022-01-22','20h30',150,15,0,2,3),(16,'2022-01-22','13h10',150,97,0,2,4),(17,'2022-01-22','15h20',150,56,0,2,4),(18,'2022-01-22','17h30',150,10,0,2,4),(19,'2022-01-22','19h40',150,0,0,2,4),(20,'2022-01-22','21h50',150,15,0,2,4);
/*!40000 ALTER TABLE `seance` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17 12:01:03
