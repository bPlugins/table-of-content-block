<?php
/**
 * Plugin Name: Table of Content
 * Description: The Table of Contents block automatically generates a table of contents for your WordPress post or page.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'TBCN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'TBCN_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'TBCN_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'TBCNPlugin' ) ){
	class TBCNPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			wp_register_style('tbcn-fontawesome','assets/css/fontawesome.css',[],'6.4.2');
			register_block_type( __DIR__ . '/build' );
		}
	}
	new TBCNPlugin();
}