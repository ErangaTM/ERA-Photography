-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 10, 2023 at 01:43 AM
-- Server version: 5.7.40-log
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eraphotography`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_infor`
--

DROP TABLE IF EXISTS `user_infor`;
CREATE TABLE IF NOT EXISTS `user_infor` (
  `Name` varchar(1000) NOT NULL,
  `Email` varchar(1000) NOT NULL,
  `Phone` varchar(1000) NOT NULL,
  `Address` varchar(1000) NOT NULL,
  `Message` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_infor`
--

INSERT INTO `user_infor` (`Name`, `Email`, `Phone`, `Address`, `Message`) VALUES
('amal perera', 'sgaillard@aol.com', '0702354789', 'NO:35,Temple road,Kadana', 'erererere'),
('amal perera', 'sgaillard@aol.com', '+94782564785', 'NO:35,Temple road,Kadana', '1234'),
('amal perera', 'sgaillard@aol.com', '0702354789', 'NO:35,Temple road,Kadana', 'ghgjg'),
('amal perera', 'sgaillard@aol.com', '+94782564785', 'NO:35,Temple road,Kadana', 'gfrtrt'),
('rukantha gunathilaka', 'maxinsam@aol.com', '0702345789', 'NO:35,Temple road,mathara', 'ababababaab'),
('amal perera', 'sgaillard@aol.com', '0702354789', 'NO:35,Temple road,Kadana', '78'),
('rukantha gunathilaka', 'maxinsam@aol.com', '0702345789', 'NO:35,Temple road,mathara', '88');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
