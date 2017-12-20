-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 07 dec 2017 om 16:19
-- Serverversie: 5.6.13
-- PHP-versie: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `joris`
--
CREATE DATABASE IF NOT EXISTS `joris` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `joris`;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `action_page`
--

CREATE TABLE IF NOT EXISTS `action_page` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `subject` varchar(300) NOT NULL,
  `tijd` varchar(60) NOT NULL,
  `dag` varchar(20) NOT NULL,
  `maand` date NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `tijd` (`tijd`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Gegevens worden uitgevoerd voor tabel `action_page`
--

INSERT INTO `action_page` (`ID`, `firstname`, `email`, `subject`, `tijd`, `dag`, `maand`) VALUES
(1, 'bla', 'bla', 'vega', '16:00-17:00', '', '2017-12-14'),
(2, 'fdadsf', 'wer', 'er', '20:00-21:00', '', '2017-11-29'),
(3, '', '', '', '', '', '0000-00-00');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `calendar`
--

CREATE TABLE IF NOT EXISTS `calendar` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `datum` date NOT NULL,
  `info` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(60) CHARACTER SET utf8 NOT NULL,
  `email` varchar(60) CHARACTER SET utf8 NOT NULL,
  `subject` varchar(600) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Gegevens worden uitgevoerd voor tabel `contact`
--

INSERT INTO `contact` (`ID`, `firstname`, `email`, `subject`) VALUES
(1, 'joris', 'test', 'test'),
(2, 'eretgh', 'dfggh@gmail.com', 'frttdyrtyghhttytty'),
(3, '29', '29', '29');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
