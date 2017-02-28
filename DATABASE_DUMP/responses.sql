CREATE TABLE `responses` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `question` int(11) unsigned NOT NULL,
  `value` varchar(255) DEFAULT '',
  `survey` int(11) unsigned NOT NULL,
  `user` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
