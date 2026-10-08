/* ============================================================
   BALAJI TECHNOLOGIES — shop.js
   120 products embedded inline. Works on file://, localhost, GitHub Pages.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Config ---------- */
  var CART_KEY = 'bts_cart_v1';
  var ORDERS_KEY = 'bts_orders_v1';
  var WHATSAPP = '9779802858997';
  var VAT_RATE = 0.13;

  /* ---------- Product catalog (120 items) ---------- */
  var PRODUCTS = [

    /* ==================== SURVEILLANCE — IP CAMERAS (12) ==================== */
    { id: 'ipc-001', sku: 'BTS-IPC-001', name: '2MP Dome IP Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 4500, unit: 'piece', stock: 24, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2MP+Dome+IP',
      short: '2MP dome IP camera with IR night vision, PoE, IP67 weather rating.',
      specs: { 'Resolution': '2MP (1920x1080)', 'Lens': '2.8mm fixed', 'Night Vision': '30m IR', 'Power': 'PoE / 12V DC' } },
    { id: 'ipc-002', sku: 'BTS-IPC-002', name: '4MP Bullet IP Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 7200, unit: 'piece', stock: 15, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4MP+Bullet+IP',
      short: '4MP outdoor bullet IP camera, color-night, H.265+, PoE.',
      specs: { 'Resolution': '4MP (2560x1440)', 'Lens': '4mm fixed', 'Night Vision': '40m Color', 'Power': 'PoE' } },
    { id: 'ipc-003', sku: 'BTS-IPC-003', name: '5MP Turret IP Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'IP Cameras', price: 8900, unit: 'piece', stock: 18, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5MP+Turret+IP',
      short: '5MP turret IP camera with smart IR, 30m night vision, PoE.',
      specs: { 'Resolution': '5MP', 'Lens': '2.8mm', 'Night Vision': '30m IR', 'Power': 'PoE' } },
    { id: 'ipc-004', sku: 'BTS-IPC-004', name: '8MP 4K Dome IP Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 15500, unit: 'piece', stock: 8, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8MP+4K+Dome',
      short: '8MP 4K UHD dome IP camera, H.265+, WDR, PoE.',
      specs: { 'Resolution': '8MP (3840x2160)', 'Lens': '2.8mm', 'WDR': '120dB', 'Power': 'PoE' } },
    { id: 'ipc-005', sku: 'BTS-IPC-005', name: '4MP Color Night Bullet Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'IP Cameras', price: 9800, unit: 'piece', stock: 12, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4MP+Color+Night',
      short: '4MP full-color night vision bullet camera with warm LED illumination.',
      specs: { 'Resolution': '4MP', 'Night Vision': 'Full Color 30m', 'Lens': '3.6mm', 'Power': 'PoE' } },
    { id: 'ipc-006', sku: 'BTS-IPC-006', name: '5MP PTZ IP Camera (4x Zoom)', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 22000, unit: 'piece', stock: 5, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5MP+PTZ+4x',
      short: '5MP outdoor PTZ camera with 4x optical zoom, auto-tracking, PoE+.',
      specs: { 'Resolution': '5MP', 'Zoom': '4x Optical', 'Pan/Tilt': '355°/90°', 'Power': 'PoE+' } },
    { id: 'ipc-007', sku: 'BTS-IPC-007', name: '2MP WiFi Indoor Camera', brand: 'TP-Link', category: 'surveillance', subcategory: 'IP Cameras', price: 3200, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2MP+WiFi+Indoor',
      short: 'Compact 2MP indoor WiFi camera with 2-way audio and SD card slot.',
      specs: { 'Resolution': '2MP', 'Connectivity': 'WiFi 2.4G', 'Audio': '2-way', 'Storage': 'microSD up to 128GB' } },
    { id: 'ipc-008', sku: 'BTS-IPC-008', name: '4MP WiFi Outdoor Camera', brand: 'TP-Link', category: 'surveillance', subcategory: 'IP Cameras', price: 5500, unit: 'piece', stock: 22, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4MP+WiFi+Outdoor',
      short: '4MP WiFi outdoor camera, IP66, night vision, motion alerts.',
      specs: { 'Resolution': '4MP', 'Rating': 'IP66', 'Night Vision': '30m', 'Connectivity': 'WiFi 2.4G' } },
    { id: 'ipc-009', sku: 'BTS-IPC-009', name: '8MP 4K Bullet IP Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 16500, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8MP+4K+Bullet',
      short: '8MP 4K bullet IP camera with motorized varifocal lens and PoE.',
      specs: { 'Resolution': '8MP', 'Lens': '2.8-12mm Motorized', 'WDR': '120dB', 'Power': 'PoE' } },
    { id: 'ipc-010', sku: 'BTS-IPC-010', name: '5MP Varifocal Dome IP Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'IP Cameras', price: 12500, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5MP+Varifocal',
      short: '5MP dome IP camera with 2.7-13.5mm motorized zoom lens.',
      specs: { 'Resolution': '5MP', 'Lens': '2.7-13.5mm', 'Night Vision': '40m', 'Power': 'PoE' } },
    { id: 'ipc-011', sku: 'BTS-IPC-011', name: '4MP Fisheye 360° Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'IP Cameras', price: 14000, unit: 'piece', stock: 7, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4MP+Fisheye',
      short: '4MP fisheye camera with 360° panoramic coverage, ideal for retail.',
      specs: { 'Resolution': '4MP', 'View': '360° Panoramic', 'Mount': 'Ceiling / Wall', 'Power': 'PoE' } },
    { id: 'ipc-012', sku: 'BTS-IPC-012', name: '2MP Solar 4G Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'IP Cameras', price: 28000, unit: 'piece', stock: 4, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Solar+4G+Camera',
      short: '2MP solar-powered 4G LTE camera with battery backup — off-grid ready.',
      specs: { 'Resolution': '2MP', 'Connectivity': '4G LTE', 'Power': 'Solar + Battery', 'Rating': 'IP66' } },

    /* ==================== SURVEILLANCE — HD ANALOG (5) ==================== */
    { id: 'ana-001', sku: 'BTS-ANA-001', name: '2MP HD Dome Analog Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'HD Analog', price: 2200, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2MP+HD+Dome',
      short: '2MP HD dome analog camera with IR night vision, coax power.',
      specs: { 'Resolution': '2MP', 'Lens': '3.6mm', 'Night Vision': '20m IR', 'Cable': 'Coax + Power' } },
    { id: 'ana-002', sku: 'BTS-ANA-002', name: '5MP HD Bullet Analog Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'HD Analog', price: 3800, unit: 'piece', stock: 25, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5MP+HD+Bullet',
      short: '5MP HD bullet analog camera, IR 30m, weatherproof housing.',
      specs: { 'Resolution': '5MP', 'Lens': '3.6mm', 'Night Vision': '30m IR', 'Rating': 'IP66' } },
    { id: 'ana-003', sku: 'BTS-ANA-003', name: '2MP HD PTZ Analog Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'HD Analog', price: 8500, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2MP+HD+PTZ',
      short: '2MP HD PTZ analog camera with 4x zoom and auto-tracking.',
      specs: { 'Resolution': '2MP', 'Zoom': '4x', 'Pan/Tilt': '360°/90°', 'Cable': 'Coax + RS485' } },
    { id: 'ana-004', sku: 'BTS-ANA-004', name: '5MP HD Color Night Analog Camera', brand: 'Dahua', category: 'surveillance', subcategory: 'HD Analog', price: 4200, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5MP+Color+Analog',
      short: '5MP HD analog camera with full-color night vision and warm LED.',
      specs: { 'Resolution': '5MP', 'Night Vision': 'Color 25m', 'Lens': '3.6mm', 'Rating': 'IP66' } },
    { id: 'ana-005', sku: 'BTS-ANA-005', name: '2MP HD Turret Analog Camera', brand: 'Hikvision', category: 'surveillance', subcategory: 'HD Analog', price: 2400, unit: 'piece', stock: 35, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2MP+HD+Turret',
      short: '2MP HD turret analog camera with smart IR and durable metal housing.',
      specs: { 'Resolution': '2MP', 'Lens': '2.8mm', 'Night Vision': '25m IR', 'Rating': 'IP66' } },

    /* ==================== SURVEILLANCE — NVRs (5) ==================== */
    { id: 'nvr-004', sku: 'BTS-NVR-004', name: '4-Channel PoE NVR', brand: 'Hikvision', category: 'surveillance', subcategory: 'NVRs', price: 8500, unit: 'piece', stock: 14, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4CH+PoE+NVR',
      short: '4-channel NVR with built-in 4-port PoE switch, 4K decoding.',
      specs: { 'Channels': '4', 'PoE Ports': '4', 'Max Decode': '4K', 'HDD Bays': '1 x SATA' } },
    { id: 'nvr-008', sku: 'BTS-NVR-008', name: '8-Channel PoE NVR', brand: 'Hikvision', category: 'surveillance', subcategory: 'NVRs', price: 12500, unit: 'piece', stock: 12, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8CH+PoE+NVR',
      short: '8-channel NVR with built-in 8-port PoE switch, 4K decoding, mobile view.',
      specs: { 'Channels': '8', 'PoE Ports': '8', 'Max Decode': '4K', 'HDD Bays': '2 x SATA' } },
    { id: 'nvr-016', sku: 'BTS-NVR-016', name: '16-Channel PoE NVR', brand: 'Hikvision', category: 'surveillance', subcategory: 'NVRs', price: 19500, unit: 'piece', stock: 7, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=16CH+PoE+NVR',
      short: '16-channel NVR with 16 PoE ports and intelligent search.',
      specs: { 'Channels': '16', 'PoE Ports': '16', 'Max Decode': '4K', 'HDD Bays': '2 x SATA' } },
    { id: 'nvr-032', sku: 'BTS-NVR-032', name: '32-Channel Enterprise NVR', brand: 'Dahua', category: 'surveillance', subcategory: 'NVRs', price: 32000, unit: 'piece', stock: 4, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=32CH+NVR',
      short: '32-channel NVR with RAID support and 4 HDD bays.',
      specs: { 'Channels': '32', 'HDD Bays': '4 x SATA', 'RAID': 'Supported', 'Bandwidth': '320 Mbps' } },
    { id: 'nvr-064', sku: 'BTS-NVR-064', name: '64-Channel Enterprise NVR', brand: 'Dahua', category: 'surveillance', subcategory: 'NVRs', price: 78000, unit: 'piece', stock: 2, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=64CH+NVR',
      short: '64-channel enterprise NVR for multi-site deployments.',
      specs: { 'Channels': '64', 'HDD Bays': '8 x SATA', 'RAID': 'RAID 0/1/5/6', 'Bandwidth': '640 Mbps' } },

    /* ==================== SURVEILLANCE — DVRs (4) ==================== */
    { id: 'dvr-004', sku: 'BTS-DVR-004', name: '4-Channel HD DVR', brand: 'Hikvision', category: 'surveillance', subcategory: 'DVRs', price: 5500, unit: 'piece', stock: 16, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4CH+DVR',
      short: '4-channel HD DVR supporting up to 5MP analog cameras.',
      specs: { 'Channels': '4', 'Max Resolution': '5MP', 'HDD Bays': '1 x SATA', 'Coax': 'HD-TVI/AHD/CVI' } },
    { id: 'dvr-008', sku: 'BTS-DVR-008', name: '8-Channel HD DVR', brand: 'Hikvision', category: 'surveillance', subcategory: 'DVRs', price: 7800, unit: 'piece', stock: 12, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8CH+DVR',
      short: '8-channel HD DVR with 4K HDMI output and mobile access.',
      specs: { 'Channels': '8', 'Max Resolution': '5MP', 'HDD Bays': '1 x SATA', 'Output': 'HDMI 4K' } },
    { id: 'dvr-016', sku: 'BTS-DVR-016', name: '16-Channel HD DVR', brand: 'Dahua', category: 'surveillance', subcategory: 'DVRs', price: 12500, unit: 'piece', stock: 8, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=16CH+DVR',
      short: '16-channel HD DVR, 2 HDD bays, pentaplex operation.',
      specs: { 'Channels': '16', 'Max Resolution': '5MP', 'HDD Bays': '2 x SATA', 'Output': 'HDMI + VGA' } },
    { id: 'dvr-032', sku: 'BTS-DVR-032', name: '32-Channel HD DVR', brand: 'Dahua', category: 'surveillance', subcategory: 'DVRs', price: 24000, unit: 'piece', stock: 3, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=32CH+DVR',
      short: '32-channel HD DVR for larger analog CCTV deployments.',
      specs: { 'Channels': '32', 'Max Resolution': '5MP', 'HDD Bays': '4 x SATA', 'Bandwidth': '320 Mbps' } },

    /* ==================== SURVEILLANCE — STORAGE (6) ==================== */
    { id: 'hdd-1tb', sku: 'BTS-HDD-1T', name: '1TB Surveillance HDD', brand: 'Seagate SkyHawk', category: 'surveillance', subcategory: 'Storage', price: 6800, unit: 'piece', stock: 22, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=1TB+HDD',
      short: 'Purpose-built 24/7 surveillance hard drive, 1TB capacity.',
      specs: { 'Capacity': '1TB', 'Interface': 'SATA 6Gb/s', 'Rated': '24/7 Surveillance', 'Warranty': '3 years' } },
    { id: 'hdd-2tb', sku: 'BTS-HDD-2T', name: '2TB Surveillance HDD', brand: 'Seagate SkyHawk', category: 'surveillance', subcategory: 'Storage', price: 9200, unit: 'piece', stock: 18, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2TB+HDD',
      short: '2TB 24/7 surveillance hard drive with ImagePerfect firmware.',
      specs: { 'Capacity': '2TB', 'Interface': 'SATA 6Gb/s', 'Rated': '24/7 Surveillance', 'Warranty': '3 years' } },
    { id: 'hdd-4tb', sku: 'BTS-HDD-4T', name: '4TB Surveillance HDD', brand: 'Seagate SkyHawk', category: 'surveillance', subcategory: 'Storage', price: 15500, unit: 'piece', stock: 14, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=4TB+HDD',
      short: '4TB surveillance hard drive for multi-camera recording.',
      specs: { 'Capacity': '4TB', 'Interface': 'SATA 6Gb/s', 'Rated': '24/7 Surveillance', 'Warranty': '3 years' } },
    { id: 'hdd-6tb', sku: 'BTS-HDD-6T', name: '6TB Surveillance HDD', brand: 'Western Digital Purple', category: 'surveillance', subcategory: 'Storage', price: 22000, unit: 'piece', stock: 9, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=6TB+HDD',
      short: '6TB WD Purple surveillance hard drive, AllFrame technology.',
      specs: { 'Capacity': '6TB', 'Interface': 'SATA 6Gb/s', 'Series': 'WD Purple', 'Warranty': '3 years' } },
    { id: 'hdd-8tb', sku: 'BTS-HDD-8T', name: '8TB Surveillance HDD', brand: 'Seagate SkyHawk', category: 'surveillance', subcategory: 'Storage', price: 28500, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8TB+HDD',
      short: '8TB surveillance-grade HDD with enhanced caching.',
      specs: { 'Capacity': '8TB', 'Interface': 'SATA 6Gb/s', 'Rated': '24/7 Surveillance', 'Warranty': '3 years' } },
    { id: 'hdd-10tb', sku: 'BTS-HDD-10T', name: '10TB Surveillance HDD', brand: 'Western Digital Purple', category: 'surveillance', subcategory: 'Storage', price: 38000, unit: 'piece', stock: 4, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=10TB+HDD',
      short: '10TB WD Purple Pro surveillance drive for enterprise NVRs.',
      specs: { 'Capacity': '10TB', 'Interface': 'SATA 6Gb/s', 'Series': 'WD Purple Pro', 'Warranty': '5 years' } },

    /* ==================== SURVEILLANCE — ACCESS CONTROL (5) ==================== */
    { id: 'ac-001', sku: 'BTS-AC-001', name: 'Fingerprint Access Control', brand: 'ZKTeco', category: 'surveillance', subcategory: 'Access Control', price: 8500, unit: 'piece', stock: 12, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fingerprint',
      short: 'Biometric fingerprint access control with card + PIN support.',
      specs: { 'Users': '3000', 'Fingerprints': '3000', 'Cards': 'RFID', 'Interface': 'TCP/IP, USB' } },
    { id: 'ac-002', sku: 'BTS-AC-002', name: 'RFID Card Reader', brand: 'ZKTeco', category: 'surveillance', subcategory: 'Access Control', price: 4500, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=RFID+Reader',
      short: 'Standalone RFID card reader with Wiegand output, 125kHz.',
      specs: { 'Frequency': '125 kHz', 'Output': 'Wiegand 26/34', 'Range': '5-10cm', 'Material': 'ABS' } },
    { id: 'ac-003', sku: 'BTS-AC-003', name: 'Electromagnetic Door Lock 280kg', brand: 'Generic', category: 'surveillance', subcategory: 'Access Control', price: 6500, unit: 'piece', stock: 15, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=EM+Lock+280kg',
      short: '600 lbs (280kg) electromagnetic door lock with fail-safe operation.',
      specs: { 'Holding Force': '280 kg', 'Voltage': '12V DC', 'Current': '500mA', 'Fail Mode': 'Fail-safe' } },
    { id: 'ac-004', sku: 'BTS-AC-004', name: 'Video Door Phone 7 inch', brand: 'Hikvision', category: 'surveillance', subcategory: 'Access Control', price: 12500, unit: 'piece', stock: 8, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Video+Door+Phone',
      short: '7" touchscreen video door phone with two-way talk and unlock.',
      specs: { 'Screen': '7" Color TFT', 'Camera': '1MP', 'Talk': 'Two-way', 'Unlock': 'Electric strike relay' } },
    { id: 'ac-005', sku: 'BTS-AC-005', name: 'Exit Push Button', brand: 'Generic', category: 'surveillance', subcategory: 'Access Control', price: 850, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Exit+Button',
      short: 'NO/NC exit push button for access control systems.',
      specs: { 'Contact': 'NO + NC + COM', 'Mount': 'Flush / Surface', 'Rating': '3A 250V', 'Material': 'ABS + Steel' } },

    /* ==================== SURVEILLANCE — CCTV ACCESSORIES (5) ==================== */
    { id: 'acc-001', sku: 'BTS-ACC-001', name: '12V 2A CCTV Power Supply', brand: 'Generic', category: 'surveillance', subcategory: 'Accessories', price: 450, unit: 'piece', stock: 60, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+2A+PSU',
      short: 'Regulated 12V 2A power supply for single camera.',
      specs: { 'Output': '12V 2A', 'Input': '100-240V AC', 'Connector': 'DC 5.5mm', 'Cable': '1m' } },
    { id: 'acc-002', sku: 'BTS-ACC-002', name: '12V 5A CCTV Power Supply', brand: 'Generic', category: 'surveillance', subcategory: 'Accessories', price: 850, unit: 'piece', stock: 45, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+5A+PSU',
      short: '12V 5A power supply for up to 4 cameras.',
      specs: { 'Output': '12V 5A', 'Input': '100-240V AC', 'Connector': 'DC 5.5mm', 'Protection': 'Over-voltage' } },
    { id: 'acc-003', sku: 'BTS-ACC-003', name: '12V 10A CCTV Power Supply', brand: 'Generic', category: 'surveillance', subcategory: 'Accessories', price: 1450, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+10A+PSU',
      short: '12V 10A centralised power supply for multi-camera setups.',
      specs: { 'Output': '12V 10A', 'Input': '100-240V AC', 'Form': 'Metal Box', 'Protection': 'Over-load' } },
    { id: 'acc-004', sku: 'BTS-ACC-004', name: 'BNC Connector (Pack of 10)', brand: 'Generic', category: 'surveillance', subcategory: 'Accessories', price: 250, unit: 'pack', stock: 100, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=BNC+Connectors',
      short: 'Twist-on BNC connectors for RG59 coax cable — pack of 10.',
      specs: { 'Type': 'BNC Male', 'Cable': 'RG59', 'Pack': '10 pcs', 'Plating': 'Nickel' } },
    { id: 'acc-005', sku: 'BTS-ACC-005', name: 'CCTV Camera Mounting Bracket', brand: 'Generic', category: 'surveillance', subcategory: 'Accessories', price: 350, unit: 'piece', stock: 80, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=CCTV+Bracket',
      short: 'Universal wall-mount CCTV camera bracket with cable management.',
      specs: { 'Load': 'Up to 3 kg', 'Material': 'ABS + Steel', 'Mount': 'Wall / Ceiling', 'Cable': 'Hidden channel' } },

    /* ==================== NETWORKING — FIBER CABLES (8) ==================== */
    { id: 'fib-002', sku: 'BTS-FIB-002', name: '2-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 22, unit: 'meter', stock: 10000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+2C',
      short: '2-core single-mode outdoor armored fiber cable, per meter.',
      specs: { 'Cores': '2', 'Type': 'G.652D Single-mode', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'fib-004', sku: 'BTS-FIB-004', name: '4-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 32, unit: 'meter', stock: 8000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+4C',
      short: '4-core single-mode outdoor fiber cable, armored, per meter.',
      specs: { 'Cores': '4', 'Type': 'G.652D', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'fib-006', sku: 'BTS-FIB-006', name: '6-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 40, unit: 'meter', stock: 6000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+6C',
      short: '6-core single-mode outdoor fiber cable, per meter.',
      specs: { 'Cores': '6', 'Type': 'G.652D', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'fib-008', sku: 'BTS-FIB-008', name: '8-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 45, unit: 'meter', stock: 5000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+8C',
      short: '8-core single-mode outdoor fiber cable, per meter.',
      specs: { 'Cores': '8', 'Type': 'G.652D', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'fib-012', sku: 'BTS-FIB-012', name: '12-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 65, unit: 'meter', stock: 4000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+12C',
      short: '12-core single-mode outdoor fiber cable, armored, per meter.',
      specs: { 'Cores': '12', 'Type': 'G.652D', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'fib-024', sku: 'BTS-FIB-024', name: '24-Core Outdoor Fiber Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Fiber Cables', price: 110, unit: 'meter', stock: 3000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Fiber+24C',
      short: '24-core single-mode outdoor fiber cable for backbone runs.',
      specs: { 'Cores': '24', 'Type': 'G.652D', 'Jacket': 'Armored PE', 'Use': 'Aerial / Duct' } },
    { id: 'drop-001', sku: 'BTS-DROP-001', name: '1-Core Drop Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Drop Cables', price: 12, unit: 'meter', stock: 15000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Drop+1C',
      short: '1-core FTTH drop cable, self-supporting, per meter.',
      specs: { 'Cores': '1', 'Type': 'G.657A', 'Strength': 'Steel wire', 'Use': 'Last-mile FTTH' } },
    { id: 'drop-002', sku: 'BTS-DROP-002', name: '2-Core Drop Cable (per meter)', brand: 'Fiberhome', category: 'networking', subcategory: 'Drop Cables', price: 18, unit: 'meter', stock: 12000, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Drop+2C',
      short: '2-core FTTH drop cable, per meter.',
      specs: { 'Cores': '2', 'Type': 'G.657A', 'Strength': 'Steel wire', 'Use': 'Last-mile FTTH' } },

    /* ==================== NETWORKING — SFP MODULES (8) ==================== */
    { id: 'sfp-1g-20', sku: 'BTS-SFP-1G-20', name: '1G SFP Module — SM 20km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 1500, unit: 'piece', stock: 80, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+1G+20km',
      short: '1.25G SFP transceiver, single-mode 20km reach, LC duplex.',
      specs: { 'Speed': '1.25 Gbps', 'Reach': '20 km', 'Wavelength': '1310 nm', 'Connector': 'LC Duplex' } },
    { id: 'sfp-1g-40', sku: 'BTS-SFP-1G-40', name: '1G SFP Module — SM 40km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 2200, unit: 'piece', stock: 50, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+1G+40km',
      short: '1.25G SFP transceiver, single-mode 40km reach, LC duplex.',
      specs: { 'Speed': '1.25 Gbps', 'Reach': '40 km', 'Wavelength': '1310 nm', 'Connector': 'LC Duplex' } },
    { id: 'sfp-10g-10', sku: 'BTS-SFP-10G-10', name: '10G SFP+ Module — SM 10km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 4500, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+10G+10km',
      short: '10G SFP+ transceiver, single-mode 10km, LC duplex.',
      specs: { 'Speed': '10 Gbps', 'Reach': '10 km', 'Wavelength': '1310 nm', 'Connector': 'LC Duplex' } },
    { id: 'sfp-10g-40', sku: 'BTS-SFP-10G-40', name: '10G SFP+ Module — SM 40km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 8500, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+10G+40km',
      short: '10G SFP+ transceiver, single-mode 40km reach, LC duplex.',
      specs: { 'Speed': '10 Gbps', 'Reach': '40 km', 'Wavelength': '1550 nm', 'Connector': 'LC Duplex' } },
    { id: 'sfp-10g-bidi', sku: 'BTS-SFP-10G-BD', name: '10G SFP+ BiDi 20km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 5500, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+10G+BiDi',
      short: 'Bi-directional 10G SFP+ module, single fiber, 20km reach.',
      specs: { 'Speed': '10 Gbps', 'Reach': '20 km', 'Wavelength': 'TX1270/RX1330', 'Connector': 'LC Simplex' } },
    { id: 'sfp-1g-bidi', sku: 'BTS-SFP-1G-BD', name: '1G SFP BiDi 20km', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 2400, unit: 'piece', stock: 45, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+1G+BiDi',
      short: 'Bi-directional 1G SFP, single fiber transmission, 20km.',
      specs: { 'Speed': '1.25 Gbps', 'Reach': '20 km', 'Wavelength': 'TX1310/RX1550', 'Connector': 'LC Simplex' } },
    { id: 'sfp-1g-mm', sku: 'BTS-SFP-1G-MM', name: '1G SFP Multimode 550m', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 1200, unit: 'piece', stock: 60, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+1G+MM',
      short: '1.25G SFP multimode transceiver, 550m reach, LC duplex.',
      specs: { 'Speed': '1.25 Gbps', 'Reach': '550 m', 'Wavelength': '850 nm', 'Connector': 'LC Duplex' } },
    { id: 'sfp-10g-mm', sku: 'BTS-SFP-10G-MM', name: '10G SFP+ Multimode 300m', brand: 'Generic', category: 'networking', subcategory: 'SFP Modules', price: 3800, unit: 'piece', stock: 25, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SFP+10G+MM',
      short: '10G SFP+ multimode transceiver, 300m reach.',
      specs: { 'Speed': '10 Gbps', 'Reach': '300 m', 'Wavelength': '850 nm', 'Connector': 'LC Duplex' } },

    /* ==================== NETWORKING — OLTs (4) ==================== */
    { id: 'olt-epon-04', sku: 'BTS-OLT-EPON-04', name: '4-Port EPON OLT', brand: 'V-SOL', category: 'networking', subcategory: 'OLTs', price: 42000, unit: 'piece', stock: 4, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=EPON+OLT+4P',
      short: '4-port EPON OLT with 2x10G uplink, L3 routing, 1U rackmount.',
      specs: { 'PON Ports': '4', 'Uplink': '2x10GE SFP+', 'Max ONU': '256', 'Management': 'Web / CLI / SNMP' } },
    { id: 'olt-gpon-08', sku: 'BTS-OLT-GPON-08', name: '8-Port GPON OLT', brand: 'V-SOL', category: 'networking', subcategory: 'OLTs', price: 85000, unit: 'piece', stock: 2, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+OLT+8P',
      short: '8-port GPON OLT, dual power, 4x10G uplink, 1U chassis.',
      specs: { 'PON Ports': '8', 'Uplink': '4x10GE SFP+', 'Max ONU': '512', 'Power': 'Dual AC/DC' } },
    { id: 'olt-gpon-16', sku: 'BTS-OLT-GPON-16', name: '16-Port GPON OLT', brand: 'V-SOL', category: 'networking', subcategory: 'OLTs', price: 145000, unit: 'piece', stock: 2, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+OLT+16P',
      short: '16-port GPON OLT with 8x10G uplink, dual power, for ISP headends.',
      specs: { 'PON Ports': '16', 'Uplink': '8x10GE SFP+', 'Max ONU': '1024', 'Power': 'Dual AC/DC' } },
    { id: 'olt-epon-04c', sku: 'BTS-OLT-EPON-C', name: '4-Port EPON OLT (Chassis)', brand: 'V-SOL', category: 'networking', subcategory: 'OLTs', price: 38000, unit: 'piece', stock: 3, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=EPON+OLT+Chassis',
      short: 'Modular 4-port EPON OLT chassis with expansion slots.',
      specs: { 'PON Ports': '4', 'Slots': '4', 'Uplink': '2x10GE', 'Rack': '1U' } },

    /* ==================== NETWORKING — ONUs (5) ==================== */
    { id: 'onu-epon-1ge', sku: 'BTS-ONU-EPON-1G', name: '1GE EPON ONU', brand: 'V-SOL', category: 'networking', subcategory: 'ONU / ONT', price: 1800, unit: 'piece', stock: 100, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=EPON+ONU+1GE',
      short: '1-port GE EPON ONU for FTTH subscriber connections.',
      specs: { 'Uplink': 'EPON', 'Ethernet': '1xGE', 'WiFi': 'No', 'Power': 'DC 12V' } },
    { id: 'onu-gpon-1ge', sku: 'BTS-ONU-GPON-1G', name: '1GE GPON ONU', brand: 'V-SOL', category: 'networking', subcategory: 'ONU / ONT', price: 2200, unit: 'piece', stock: 80, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+ONU+1GE',
      short: '1-port GE GPON ONU with SC/APC uplink.',
      specs: { 'Uplink': 'GPON', 'Ethernet': '1xGE', 'WiFi': 'No', 'Power': 'DC 12V' } },
    { id: 'onu-gpon-wifi', sku: 'BTS-ONU-GW', name: '1GE + WiFi GPON ONU', brand: 'V-SOL', category: 'networking', subcategory: 'ONU / ONT', price: 3500, unit: 'piece', stock: 60, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+ONU+WiFi',
      short: 'Dual-band WiFi GPON ONU with 1xGE port, 2.4G + 5G.',
      specs: { 'Uplink': 'GPON (SC/APC)', 'Ethernet': '1xGE', 'WiFi': '2.4G + 5G', 'VoIP': 'Optional' } },
    { id: 'onu-gpon-4ge', sku: 'BTS-ONU-GPON-4G', name: '4GE + WiFi GPON ONU', brand: 'V-SOL', category: 'networking', subcategory: 'ONU / ONT', price: 6500, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+ONU+4GE',
      short: '4-port GE + Dual-band WiFi GPON ONU for small business.',
      specs: { 'Uplink': 'GPON', 'Ethernet': '4xGE', 'WiFi': '2.4G + 5G', 'VoIP': 'Yes' } },
    { id: 'onu-gpon-voip', sku: 'BTS-ONU-GPON-V', name: '1GE + WiFi + VoIP GPON ONU', brand: 'V-SOL', category: 'networking', subcategory: 'ONU / ONT', price: 4800, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=GPON+ONU+VoIP',
      short: 'GPON ONU with 1xGE + WiFi + 1 FXS VoIP port.',
      specs: { 'Uplink': 'GPON', 'Ethernet': '1xGE', 'WiFi': '2.4G + 5G', 'VoIP': '1 FXS' } },

    /* ==================== NETWORKING — SWITCHES (10) ==================== */
    { id: 'sw-005', sku: 'BTS-SW-005', name: '5-Port Gigabit Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 2200, unit: 'piece', stock: 25, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=5P+GB+Switch',
      short: '5-port unmanaged gigabit switch, desktop form factor.',
      specs: { 'Ports': '5xGE', 'Speed': 'Gigabit', 'Managed': 'No', 'Form': 'Desktop' } },
    { id: 'sw-008', sku: 'BTS-SW-008', name: '8-Port Gigabit Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 3800, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8P+GB+Switch',
      short: '8-port unmanaged gigabit switch, metal housing.',
      specs: { 'Ports': '8xGE', 'Speed': 'Gigabit', 'Managed': 'No', 'Form': 'Desktop / Rack' } },
    { id: 'sw-016', sku: 'BTS-SW-016', name: '16-Port Gigabit Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 8500, unit: 'piece', stock: 14, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=16P+GB+Switch',
      short: '16-port unmanaged gigabit switch, 1U rack mountable.',
      specs: { 'Ports': '16xGE', 'Speed': 'Gigabit', 'Managed': 'No', 'Form': '1U Rack' } },
    { id: 'sw-024', sku: 'BTS-SW-024', name: '24-Port Gigabit Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 14500, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=24P+GB+Switch',
      short: '24-port unmanaged gigabit switch, 1U rack mount.',
      specs: { 'Ports': '24xGE', 'Speed': 'Gigabit', 'Managed': 'No', 'Form': '1U Rack' } },
    { id: 'sw-048', sku: 'BTS-SW-048', name: '48-Port Gigabit Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 32000, unit: 'piece', stock: 5, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=48P+GB+Switch',
      short: '48-port unmanaged gigabit switch for larger deployments.',
      specs: { 'Ports': '48xGE', 'Speed': 'Gigabit', 'Managed': 'No', 'Form': '1U Rack' } },
    { id: 'sw-poe-08', sku: 'BTS-SW-POE-08', name: '8-Port PoE Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 12000, unit: 'piece', stock: 12, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8P+PoE+Switch',
      short: '8-port gigabit PoE+ switch, 120W budget, unmanaged, fanless.',
      specs: { 'Ports': '8xGE', 'PoE Budget': '120W', 'PoE Standard': '802.3af/at', 'Form': 'Desktop / Rack' } },
    { id: 'sw-poe-16', sku: 'BTS-SW-POE-16', name: '16-Port PoE Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 18500, unit: 'piece', stock: 8, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=16P+PoE+Switch',
      short: '16-port gigabit PoE+ switch with 250W budget.',
      specs: { 'Ports': '16xGE', 'PoE Budget': '250W', 'PoE Standard': '802.3af/at', 'Form': '1U Rack' } },
    { id: 'sw-poe-24', sku: 'BTS-SW-POE-24', name: '24-Port Managed PoE Switch', brand: 'TP-Link', category: 'networking', subcategory: 'Switches', price: 32000, unit: 'piece', stock: 5, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=24P+Managed+PoE',
      short: '24-port L2+ managed PoE+ switch with 4xSFP uplink, 370W budget.',
      specs: { 'Ports': '24xGE + 4xSFP', 'PoE Budget': '370W', 'Management': 'L2+ Managed', 'Form': '1U Rack' } },
    { id: 'sw-l2-08', sku: 'BTS-SW-L2-08', name: '8-Port L2 Managed Switch', brand: 'Cisco', category: 'networking', subcategory: 'Switches', price: 14500, unit: 'piece', stock: 7, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=8P+L2+Managed',
      short: '8-port gigabit L2 managed switch with VLANs and QoS.',
      specs: { 'Ports': '8xGE', 'Management': 'L2 Managed', 'VLAN': 'Yes', 'Form': 'Desktop' } },
    { id: 'sw-l3-24', sku: 'BTS-SW-L3-24', name: '24-Port L3 Managed Switch', brand: 'Cisco', category: 'networking', subcategory: 'Switches', price: 48000, unit: 'piece', stock: 3, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=24P+L3+Managed',
      short: '24-port L3 managed switch with static routing and 4xSFP+.',
      specs: { 'Ports': '24xGE + 4xSFP+', 'Management': 'L3', 'Routing': 'Static + RIP', 'Form': '1U Rack' } },

    /* ==================== NETWORKING — ROUTERS (5) ==================== */
    { id: 'rt-soho-300', sku: 'BTS-RT-300', name: 'SOHO WiFi Router 300Mbps', brand: 'TP-Link', category: 'networking', subcategory: 'Routers', price: 2200, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Router+300M',
      short: '300Mbps wireless router with 3 antennas, WPS support.',
      specs: { 'Speed': '300 Mbps', 'Antennas': '3', 'Ports': '1 WAN + 4 LAN', 'Bands': '2.4G' } },
    { id: 'rt-ac1200', sku: 'BTS-RT-AC1200', name: 'Dual Band WiFi Router AC1200', brand: 'TP-Link', category: 'networking', subcategory: 'Routers', price: 4500, unit: 'piece', stock: 22, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Router+AC1200',
      short: 'Dual-band AC1200 router, gigabit ports, WPA3 ready.',
      specs: { 'Speed': 'AC1200', 'Antennas': '4', 'Ports': '1 WAN + 4 LAN GE', 'Bands': '2.4G + 5G' } },
    { id: 'rt-ax1800', sku: 'BTS-RT-AX1800', name: 'WiFi 6 AX1800 Router', brand: 'TP-Link', category: 'networking', subcategory: 'Routers', price: 9500, unit: 'piece', stock: 15, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Router+AX1800',
      short: 'WiFi 6 AX1800 router with OFDMA, MU-MIMO, gigabit ports.',
      specs: { 'Speed': 'AX1800', 'WiFi': 'WiFi 6', 'Ports': '1 WAN + 4 LAN GE', 'Bands': '2.4G + 5G' } },
    { id: 'rt-vpn', sku: 'BTS-RT-VPN', name: 'Enterprise VPN Router', brand: 'TP-Link', category: 'networking', subcategory: 'Routers', price: 18500, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=VPN+Router',
      short: 'Enterprise router with PPTP/L2TP/IPSec VPN, load balancing.',
      specs: { 'VPN': 'PPTP/L2TP/IPSec', 'Ports': '2 WAN + 3 LAN', 'Users': '100+', 'Form': 'Rack' } },
    { id: 'rt-loadbal', sku: 'BTS-RT-LB', name: 'Multi-WAN Load Balance Router', brand: 'TP-Link', category: 'networking', subcategory: 'Routers', price: 24000, unit: 'piece', stock: 4, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Load+Balance',
      short: 'Multi-WAN gigabit router with automatic failover and balancing.',
      specs: { 'WAN Ports': '4', 'LAN Ports': '4xGE', 'Failover': 'Auto', 'Form': 'Rack' } },

    /* ==================== NETWORKING — ACCESS POINTS (4) ==================== */
    { id: 'ap-ind-300', sku: 'BTS-AP-IN-300', name: 'Indoor Access Point 300Mbps', brand: 'TP-Link', category: 'networking', subcategory: 'Access Points', price: 3500, unit: 'piece', stock: 18, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=AP+Indoor+300M',
      short: 'Ceiling-mount 300Mbps indoor WiFi access point, PoE.',
      specs: { 'Speed': '300 Mbps', 'Band': '2.4G', 'PoE': '802.3af', 'Mount': 'Ceiling' } },
    { id: 'ap-ind-ac1200', sku: 'BTS-AP-IN-AC12', name: 'Indoor Access Point AC1200', brand: 'TP-Link', category: 'networking', subcategory: 'Access Points', price: 7500, unit: 'piece', stock: 12, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=AP+Indoor+AC1200',
      short: 'Dual-band AC1200 indoor ceiling access point with PoE.',
      specs: { 'Speed': 'AC1200', 'Band': 'Dual', 'PoE': '802.3af/at', 'Mount': 'Ceiling' } },
    { id: 'ap-out-ac1200', sku: 'BTS-AP-OUT-AC12', name: 'Outdoor Access Point AC1200', brand: 'TP-Link', category: 'networking', subcategory: 'Access Points', price: 12500, unit: 'piece', stock: 8, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=AP+Outdoor+AC1200',
      short: 'IP67 outdoor AC1200 access point with PoE passthrough.',
      specs: { 'Speed': 'AC1200', 'Rating': 'IP67', 'PoE': '802.3af/at', 'Mount': 'Pole / Wall' } },
    { id: 'ap-wifi6', sku: 'BTS-AP-WIFI6', name: 'WiFi 6 Dual Band Access Point', brand: 'Ubiquiti', category: 'networking', subcategory: 'Access Points', price: 18500, unit: 'piece', stock: 5, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=AP+WiFi+6',
      short: 'WiFi 6 dual-band access point with MU-MIMO, PoE+, cloud managed.',
      specs: { 'WiFi': 'WiFi 6', 'Bands': 'Dual', 'PoE': '802.3at', 'Users': '200+' } },

    /* ==================== NETWORKING — ODF (3) ==================== */
    { id: 'odf-12', sku: 'BTS-ODF-12', name: '12-Port Rack ODF', brand: 'Generic', category: 'networking', subcategory: 'ODF', price: 3500, unit: 'piece', stock: 15, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=ODF+12P',
      short: '12-port optical distribution frame with SC adapters, 1U rack.',
      specs: { 'Ports': '12', 'Adapter': 'SC/UPC', 'Form': '1U Rack', 'Material': 'Cold Rolled Steel' } },
    { id: 'odf-24', sku: 'BTS-ODF-24', name: '24-Port Rack ODF', brand: 'Generic', category: 'networking', subcategory: 'ODF', price: 5500, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=ODF+24P',
      short: '24-port ODF with splice trays and SC adapters, 1U rack.',
      specs: { 'Ports': '24', 'Adapter': 'SC/UPC', 'Form': '1U Rack', 'Trays': '2' } },
    { id: 'odf-48', sku: 'BTS-ODF-48', name: '48-Port Rack ODF', brand: 'Generic', category: 'networking', subcategory: 'ODF', price: 9500, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=ODF+48P',
      short: '48-port ODF for high-density fiber termination.',
      specs: { 'Ports': '48', 'Adapter': 'SC/UPC', 'Form': '1U Rack', 'Trays': '4' } },

    /* ==================== NETWORKING — FDB / FTB (7) ==================== */
    { id: 'fdb-004', sku: 'BTS-FDB-004', name: '4-Port Fiber Distribution Box', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 1200, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=FDB+4P',
      short: 'Wall-mount fiber distribution box, 4 SC adapters, IP65.',
      specs: { 'Ports': '4 SC', 'Rating': 'IP65', 'Mount': 'Wall / Pole', 'Splitter': 'Pre-installable' } },
    { id: 'fdb-008', sku: 'BTS-FDB-008', name: '8-Port Fiber Distribution Box', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 1800, unit: 'piece', stock: 35, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=FDB+8P',
      short: 'Wall-mount fiber distribution box, 8 SC adapters, IP65 rated.',
      specs: { 'Ports': '8 SC', 'Mount': 'Wall / Pole', 'Rating': 'IP65', 'Splitters': 'Pre-installable' } },
    { id: 'fdb-016', sku: 'BTS-FDB-016', name: '16-Port Fiber Distribution Box', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 2800, unit: 'piece', stock: 25, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=FDB+16P',
      short: '16-port wall-mount fiber distribution box with splitter tray.',
      specs: { 'Ports': '16 SC', 'Mount': 'Wall / Pole', 'Rating': 'IP65', 'Splitters': '1x8 or 2x8' } },
    { id: 'fdb-024', sku: 'BTS-FDB-024', name: '24-Port Fiber Distribution Box', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 3800, unit: 'piece', stock: 18, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=FDB+24P',
      short: '24-port fiber distribution box for pole or wall mounting.',
      specs: { 'Ports': '24 SC', 'Mount': 'Wall / Pole', 'Rating': 'IP65', 'Splitters': 'Multi-tray' } },
    { id: 'ftb-001', sku: 'BTS-FTB-001', name: 'Fiber Terminal Box', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 450, unit: 'piece', stock: 80, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=FTB',
      short: 'Small customer-premises fiber terminal box for drop cable termination.',
      specs: { 'Ports': '2 SC', 'Rating': 'IP54', 'Mount': 'Wall', 'Use': 'CPE termination' } },
    { id: 'jc-001', sku: 'BTS-JC-001', name: 'Inline Fiber Joint Closure', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 2200, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Joint+Closure',
      short: 'Inline horizontal fiber joint closure, 24-core capacity, IP68.',
      specs: { 'Capacity': '24 cores', 'Rating': 'IP68', 'Type': 'Inline', 'Use': 'Aerial / Duct' } },
    { id: 'jc-002', sku: 'BTS-JC-002', name: 'Dome Fiber Joint Closure', brand: 'Generic', category: 'networking', subcategory: 'Enclosures', price: 3200, unit: 'piece', stock: 22, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Dome+Closure',
      short: 'Dome-type fiber joint closure, 48-core, IP68 rated.',
      specs: { 'Capacity': '48 cores', 'Rating': 'IP68', 'Type': 'Dome', 'Use': 'Aerial / Duct' } },

    /* ==================== NETWORKING — SPLITTERS (4) ==================== */
    { id: 'spl-1x2', sku: 'BTS-SPL-1x2', name: 'PLC Splitter 1x2 SC/UPC', brand: 'Generic', category: 'networking', subcategory: 'Splitters', price: 550, unit: 'piece', stock: 60, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=PLC+1x2',
      short: '1x2 PLC fiber splitter, SC/UPC connectors, 900um pigtail.',
      specs: { 'Ratio': '1x2', 'Connector': 'SC/UPC', 'Type': 'PLC', 'Pigtail': '900um' } },
    { id: 'spl-1x4', sku: 'BTS-SPL-1x4', name: 'PLC Splitter 1x4 SC/UPC', brand: 'Generic', category: 'networking', subcategory: 'Splitters', price: 850, unit: 'piece', stock: 50, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=PLC+1x4',
      short: '1x4 PLC fiber splitter with SC/UPC connectors.',
      specs: { 'Ratio': '1x4', 'Connector': 'SC/UPC', 'Type': 'PLC', 'Pigtail': '900um' } },
    { id: 'spl-1x8', sku: 'BTS-SPL-1x8', name: 'PLC Splitter 1x8 SC/UPC', brand: 'Generic', category: 'networking', subcategory: 'Splitters', price: 1200, unit: 'piece', stock: 40, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=PLC+1x8',
      short: '1x8 PLC fiber splitter with SC/UPC connectors.',
      specs: { 'Ratio': '1x8', 'Connector': 'SC/UPC', 'Type': 'PLC', 'Pigtail': '900um' } },
    { id: 'spl-1x16', sku: 'BTS-SPL-1x16', name: 'PLC Splitter 1x16 SC/UPC', brand: 'Generic', category: 'networking', subcategory: 'Splitters', price: 2200, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=PLC+1x16',
      short: '1x16 PLC fiber splitter with SC/UPC connectors.',
      specs: { 'Ratio': '1x16', 'Connector': 'SC/UPC', 'Type': 'PLC', 'Pigtail': '900um' } },

    /* ==================== NETWORKING — PATCH CORDS (4) ==================== */
    { id: 'pc-sc-sc', sku: 'BTS-PC-SCSC', name: 'SC-SC SM Patch Cord 3m', brand: 'Generic', category: 'networking', subcategory: 'Patch Cords', price: 250, unit: 'piece', stock: 150, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SC-SC+Patch',
      short: '3m single-mode SC-SC fiber patch cord, simplex.',
      specs: { 'Length': '3m', 'Connector': 'SC-SC', 'Mode': 'Single-mode', 'Type': 'Simplex' } },
    { id: 'pc-lc-lc', sku: 'BTS-PC-LCLC', name: 'LC-LC SM Patch Cord 3m', brand: 'Generic', category: 'networking', subcategory: 'Patch Cords', price: 350, unit: 'piece', stock: 120, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=LC-LC+Patch',
      short: '3m single-mode LC-LC fiber patch cord, duplex.',
      specs: { 'Length': '3m', 'Connector': 'LC-LC', 'Mode': 'Single-mode', 'Type': 'Duplex' } },
    { id: 'pc-sc-lc', sku: 'BTS-PC-SCLC', name: 'SC-LC SM Patch Cord 3m', brand: 'Generic', category: 'networking', subcategory: 'Patch Cords', price: 320, unit: 'piece', stock: 100, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SC-LC+Patch',
      short: '3m single-mode SC-LC hybrid patch cord, simplex.',
      specs: { 'Length': '3m', 'Connector': 'SC-LC', 'Mode': 'Single-mode', 'Type': 'Simplex' } },
    { id: 'pc-lc-lc-mm', sku: 'BTS-PC-LCLCMM', name: 'LC-LC MM Patch Cord 3m', brand: 'Generic', category: 'networking', subcategory: 'Patch Cords', price: 280, unit: 'piece', stock: 90, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=LC-LC+MM',
      short: '3m multimode OM3 LC-LC patch cord, duplex.',
      specs: { 'Length': '3m', 'Connector': 'LC-LC', 'Mode': 'OM3 Multimode', 'Type': 'Duplex' } },

    /* ==================== NETWORKING — PIGTAILS (2) ==================== */
    { id: 'pig-sc', sku: 'BTS-PIG-SC', name: 'SC/UPC Pigtail SM 1.5m', brand: 'Generic', category: 'networking', subcategory: 'Pigtails', price: 85, unit: 'piece', stock: 300, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=SC+Pigtail',
      short: '1.5m single-mode SC/UPC fiber pigtail, 900um.',
      specs: { 'Length': '1.5m', 'Connector': 'SC/UPC', 'Mode': 'Single-mode', 'Jacket': '900um' } },
    { id: 'pig-lc', sku: 'BTS-PIG-LC', name: 'LC/UPC Pigtail SM 1.5m', brand: 'Generic', category: 'networking', subcategory: 'Pigtails', price: 120, unit: 'piece', stock: 250, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=LC+Pigtail',
      short: '1.5m single-mode LC/UPC fiber pigtail, 900um.',
      specs: { 'Length': '1.5m', 'Connector': 'LC/UPC', 'Mode': 'Single-mode', 'Jacket': '900um' } },

    /* ==================== POWER — BATTERIES (8) ==================== */
    { id: 'bat-7ah', sku: 'BTS-BAT-7AH', name: '12V 7Ah SLA Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 2200, unit: 'piece', stock: 35, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+7Ah',
      short: 'Maintenance-free SLA battery for UPS, alarm panels, and network racks.',
      specs: { 'Voltage': '12V', 'Capacity': '7Ah', 'Type': 'SLA / VRLA', 'Warranty': '1 year' } },
    { id: 'bat-9ah', sku: 'BTS-BAT-9AH', name: '12V 9Ah SLA Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 2800, unit: 'piece', stock: 30, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+9Ah',
      short: '12V 9Ah sealed lead-acid battery for small UPS systems.',
      specs: { 'Voltage': '12V', 'Capacity': '9Ah', 'Type': 'SLA / VRLA', 'Warranty': '1 year' } },
    { id: 'bat-26ah', sku: 'BTS-BAT-26AH', name: '12V 26Ah SLA Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 6500, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+26Ah',
      short: '12V 26Ah battery for medium UPS and backup systems.',
      specs: { 'Voltage': '12V', 'Capacity': '26Ah', 'Type': 'SLA / VRLA', 'Warranty': '1 year' } },
    { id: 'bat-42ah', sku: 'BTS-BAT-42AH', name: '12V 42Ah SLA Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 9800, unit: 'piece', stock: 15, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+42Ah',
      short: '12V 42Ah battery for extended UPS runtime.',
      specs: { 'Voltage': '12V', 'Capacity': '42Ah', 'Type': 'SLA / VRLA', 'Warranty': '1 year' } },
    { id: 'bat-65ah', sku: 'BTS-BAT-65AH', name: '12V 65Ah SLA Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 14500, unit: 'piece', stock: 12, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+65Ah',
      short: '12V 65Ah battery for larger UPS and solar backups.',
      specs: { 'Voltage': '12V', 'Capacity': '65Ah', 'Type': 'SLA / VRLA', 'Warranty': '1 year' } },
    { id: 'bat-100ah-t', sku: 'BTS-BAT-100T', name: '12V 100Ah Tubular Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 22000, unit: 'piece', stock: 10, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+100Ah',
      short: '12V 100Ah tubular battery for inverter / solar / UPS.',
      specs: { 'Voltage': '12V', 'Capacity': '100Ah', 'Type': 'Tubular', 'Warranty': '3 years' } },
    { id: 'bat-150ah-t', sku: 'BTS-BAT-150T', name: '12V 150Ah Tubular Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 32000, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+150Ah',
      short: '12V 150Ah tubular battery for heavy backup loads.',
      specs: { 'Voltage': '12V', 'Capacity': '150Ah', 'Type': 'Tubular', 'Warranty': '3 years' } },
    { id: 'bat-200ah-t', sku: 'BTS-BAT-200T', name: '12V 200Ah Tubular Battery', brand: 'Exide', category: 'power', subcategory: 'Batteries', price: 42000, unit: 'piece', stock: 4, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=12V+200Ah',
      short: '12V 200Ah tubular battery for large inverter / solar systems.',
      specs: { 'Voltage': '12V', 'Capacity': '200Ah', 'Type': 'Tubular', 'Warranty': '3 years' } },

    /* ==================== POWER — UPS (5) ==================== */
    { id: 'ups-600', sku: 'BTS-UPS-600', name: '600VA Line-Interactive UPS', brand: 'APC', category: 'power', subcategory: 'UPS', price: 4800, unit: 'piece', stock: 18, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=600VA+UPS',
      short: '600VA UPS for routers, NVRs and small network racks. AVR + surge protection.',
      specs: { 'Capacity': '600VA / 360W', 'Outlets': '4', 'Runtime': '~20 min', 'Form': 'Desktop' } },
    { id: 'ups-1000', sku: 'BTS-UPS-1000', name: '1000VA Line-Interactive UPS', brand: 'APC', category: 'power', subcategory: 'UPS', price: 8500, unit: 'piece', stock: 14, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=1000VA+UPS',
      short: '1000VA UPS with AVR, LCD display, and surge protection.',
      specs: { 'Capacity': '1000VA / 600W', 'Outlets': '6', 'Runtime': '~25 min', 'Form': 'Desktop' } },
    { id: 'ups-1500', sku: 'BTS-UPS-1500', name: '1500VA Line-Interactive UPS', brand: 'APC', category: 'power', subcategory: 'UPS', price: 12500, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=1500VA+UPS',
      short: '1500VA UPS for workstations and small servers.',
      specs: { 'Capacity': '1500VA / 900W', 'Outlets': '8', 'Runtime': '~30 min', 'Form': 'Desktop' } },
    { id: 'ups-2kva', sku: 'BTS-UPS-2KVA', name: '2KVA Online UPS', brand: 'APC', category: 'power', subcategory: 'UPS', price: 24000, unit: 'piece', stock: 5, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=2KVA+Online',
      short: '2KVA double-conversion online UPS with pure sine wave output.',
      specs: { 'Capacity': '2KVA / 1800W', 'Topology': 'Online', 'Runtime': '~15 min', 'Form': 'Rack / Tower' } },
    { id: 'ups-3kva', sku: 'BTS-UPS-3KVA', name: '3KVA Online UPS', brand: 'APC', category: 'power', subcategory: 'UPS', price: 38000, unit: 'piece', stock: 3, type: 'retail', featured: true,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=3KVA+Online',
      short: '3KVA online UPS for servers, telecom racks, and CCTV NVRs.',
      specs: { 'Capacity': '3KVA / 2700W', 'Topology': 'Online', 'Runtime': '~20 min', 'Form': 'Rack / Tower' } },

    /* ==================== POWER — RACKS (4) ==================== */
    { id: 'rack-4u', sku: 'BTS-RACK-4U', name: '4U Wall Mount Rack', brand: 'Generic', category: 'power', subcategory: 'Racks', price: 3500, unit: 'piece', stock: 20, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Rack+4U',
      short: '4U wall-mount network rack with lock and cable entry.',
      specs: { 'Size': '4U', 'Depth': '300mm', 'Load': '30 kg', 'Mount': 'Wall' } },
    { id: 'rack-6u', sku: 'BTS-RACK-6U', name: '6U Wall Mount Rack', brand: 'Generic', category: 'power', subcategory: 'Racks', price: 5500, unit: 'piece', stock: 15, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Rack+6U',
      short: '6U wall-mount rack with glass door and rear cable entry.',
      specs: { 'Size': '6U', 'Depth': '400mm', 'Load': '40 kg', 'Mount': 'Wall' } },
    { id: 'rack-9u', sku: 'BTS-RACK-9U', name: '9U Wall Mount Rack', brand: 'Generic', category: 'power', subcategory: 'Racks', price: 7800, unit: 'piece', stock: 10, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Rack+9U',
      short: '9U wall-mount rack for small server / network installations.',
      specs: { 'Size': '9U', 'Depth': '450mm', 'Load': '50 kg', 'Mount': 'Wall' } },
    { id: 'rack-22u', sku: 'BTS-RACK-22U', name: '22U Floor Standing Rack', brand: 'Generic', category: 'power', subcategory: 'Racks', price: 18500, unit: 'piece', stock: 6, type: 'retail', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Rack+22U',
      short: '22U free-standing rack with cooling fan and casters.',
      specs: { 'Size': '22U', 'Depth': '600mm', 'Load': '300 kg', 'Mount': 'Floor' } },

    /* ==================== POWER — QUOTE-ONLY PROJECT ==================== */
    { id: 'project-quote', sku: 'BTS-QUOTE', name: 'Bulk / Project Order', brand: 'Custom', category: 'power', subcategory: 'Project', price: 0, unit: 'project', stock: 999, type: 'quote', featured: false,
      image: 'https://placehold.co/500x400/0A1F44/00C2D1?text=Project+Quote',
      short: 'Planning a full FTTH rollout or multi-site CCTV? Request a project quote.',
      specs: { 'Delivery': 'Staged', 'Pricing': 'Contractor rates', 'Support': 'Dedicated engineer' } }

  ];

  /* ---------- Utilities ---------- */
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function money(n) { return 'Rs. ' + Number(n).toLocaleString('en-IN'); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- Toast ---------- */
  var Toast = {
    stack: null,
    init: function () {
      if (this.stack) return;
      this.stack = document.createElement('div');
      this.stack.className = 'toast-stack';
      document.body.appendChild(this.stack);
    },
    show: function (msg, icon) {
      this.init();
      var t = document.createElement('div');
      t.className = 'toast';
      var path = icon === 'cart'
        ? '<circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>'
        : '<path d="M20 6 9 17l-5-5"/>';
      t.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>' + esc(msg);
      this.stack.appendChild(t);
      setTimeout(function () { t.remove(); }, 3200);
    }
  };

  /* ---------- Catalog ---------- */
  var Catalog = {
    all: function () { return PRODUCTS; },
    find: function (id) {
      for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
      return null;
    }
  };

  /* ---------- Cart ---------- */
  var Cart = {
    get: function () {
      try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
      catch (e) { return []; }
    },
    save: function (items) {
      try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {}
      this.renderBadge();
      document.dispatchEvent(new CustomEvent('cart:change', { detail: items }));
    },
    add: function (id, qty) {
      qty = qty || 1;
      var p = Catalog.find(id);
      if (!p) return;
      if (p.stock <= 0) { Toast.show('Out of stock', 'cart'); return; }
      var items = this.get();
      var row = null;
      for (var i = 0; i < items.length; i++) if (items[i].id === id) row = items[i];
      var newQty = (row ? row.qty : 0) + qty;
      if (newQty > p.stock) { Toast.show('Only ' + p.stock + ' in stock', 'cart'); return; }
      if (row) row.qty = newQty;
      else items.push({ id: id, qty: qty });
      this.save(items);
      Toast.show(p.name + ' added to cart', 'cart');
    },
    remove: function (id) {
      var items = this.get().filter(function (i) { return i.id !== id; });
      this.save(items);
      Toast.show('Removed from cart');
    },
    setQty: function (id, qty) {
      qty = Math.max(1, parseInt(qty, 10) || 1);
      var items = this.get();
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) { items[i].qty = qty; break; }
      }
      this.save(items);
    },
    clear: function () { this.save([]); },
    count: function () {
      return this.get().reduce(function (s, i) { return s + (i.qty || 0); }, 0);
    },
    detailed: function () {
      return this.get().map(function (row) {
        var p = Catalog.find(row.id);
        if (!p) return null;
        return {
          id: p.id, sku: p.sku, name: p.name, brand: p.brand,
          image: p.image, price: p.price, unit: p.unit,
          stock: p.stock, qty: row.qty, lineTotal: p.price * row.qty
        };
      }).filter(Boolean);
    },
    totals: function () {
      var lines = this.detailed();
      var subtotal = lines.reduce(function (s, l) { return s + l.lineTotal; }, 0);
      var vat = Math.round(subtotal * VAT_RATE);
      return { lines: lines, subtotal: subtotal, vat: vat, total: subtotal + vat, count: this.count() };
    },
    renderBadge: function () {
      var n = this.count();
      $$('.cart-badge').forEach(function (el) {
        el.textContent = n;
        el.hidden = n === 0;
      });
    }
  };

  /* ---------- Cart Drawer ---------- */
  var Drawer = {
    el: null, overlay: null, built: false,
    build: function () {
      if (this.built) return;
      var wrap = document.createElement('div');
      wrap.innerHTML =
        '<div class="drawer-overlay" data-drawer-close></div>' +
        '<aside class="drawer" role="dialog" aria-label="Shopping cart">' +
          '<div class="drawer__head">' +
            '<h3>Your Cart</h3>' +
            '<button class="drawer__close" data-drawer-close aria-label="Close cart">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="drawer__body" data-drawer-body></div>' +
          '<div class="drawer__foot" data-drawer-foot></div>' +
        '</aside>';
      document.body.appendChild(wrap);
      this.el = $('.drawer');
      this.overlay = $('.drawer-overlay');
      var self = this;
      document.addEventListener('click', function (e) {
        if (e.target.closest('[data-drawer-close]')) self.close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') self.close();
      });
      this.built = true;
    },
    open: function () {
      this.build();
      this.overlay.classList.add('open');
      this.el.classList.add('open');
      document.body.style.overflow = 'hidden';
      this.render();
    },
    close: function () {
      if (!this.el) return;
      this.overlay.classList.remove('open');
      this.el.classList.remove('open');
      document.body.style.overflow = '';
    },
    render: function () {
      var body = $('[data-drawer-body]', this.el);
      var foot = $('[data-drawer-foot]', this.el);
      var t = Cart.totals();
      if (!t.lines.length) {
        body.innerHTML =
          '<div class="drawer__empty">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>' +
            '<p>Your cart is empty.</p>' +
            '<a href="shop.html" class="btn btn--primary btn--sm">Browse products</a>' +
          '</div>';
        foot.innerHTML = '';
        return;
      }
      body.innerHTML = t.lines.map(function (l) {
        return '<div class="drawer-item">' +
          '<div class="drawer-item__img"><img src="' + esc(l.image) + '" alt="' + esc(l.name) + '" loading="lazy"></div>' +
          '<div>' +
            '<div class="drawer-item__name">' + esc(l.name) + '</div>' +
            '<div class="drawer-item__qty">Qty ' + l.qty + ' x ' + money(l.price) + '</div>' +
          '</div>' +
          '<div class="drawer-item__price">' + money(l.lineTotal) + '</div>' +
        '</div>';
      }).join('');
      foot.innerHTML =
        '<div style="display:flex;justify-content:space-between;padding:7px 0;font-size:.84rem;"><span style="color:var(--muted);font-weight:600;">Subtotal</span><strong>' + money(t.subtotal) + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;padding:7px 0;font-size:.84rem;"><span style="color:var(--muted);font-weight:600;">VAT (13%)</span><strong>' + money(t.vat) + '</strong></div>' +
        '<div style="display:flex;justify-content:space-between;padding:10px 0 0;font-size:.9rem;border-top:1px dashed var(--line);margin-top:6px;"><span style="color:var(--navy-800);font-weight:800;">Total (excl. delivery)</span><strong>' + money(t.total) + '</strong></div>' +
        '<a href="checkout.html" class="btn btn--primary btn--block" style="margin-top:12px;">Checkout via WhatsApp</a>';
    }
  };

  window.BTS_Drawer = Drawer;

  /* ---------- Product rendering helpers ---------- */
  function stockPill(p) {
    if (p.stock <= 0) return '<span class="stock-pill stock-pill--out"><span class="dot"></span>Out of stock</span>';
    if (p.stock <= 5) return '<span class="stock-pill stock-pill--low"><span class="dot"></span>Only ' + p.stock + ' left</span>';
    return '<span class="stock-pill"><span class="dot"></span>In stock (' + p.stock + ')</span>';
  }

  function productCard(p) {
    var out = p.stock <= 0;
    return '<article class="p-card">' +
      '<div class="p-card__media">' +
        '<div class="p-card__badges">' +
          (p.featured ? '<span class="badge badge--teal">Featured</span>' : '') +
          (out ? '<span class="badge badge--danger">Out of stock</span>' : '') +
        '</div>' +
        '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '</div>' +
      '<div class="p-card__body">' +
        (p.brand ? '<div class="p-card__brand">' + esc(p.brand) + '</div>' : '') +
        '<h3 class="p-card__name">' + esc(p.name) + '</h3>' +
        stockPill(p) +
        '<p class="p-card__short">' + esc(p.short || '') + '</p>' +
        '<div class="p-card__price">' +
          '<strong>' + money(p.price) + '</strong>' +
          '<span>/ ' + esc(p.unit || 'piece') + '</span>' +
        '</div>' +
        '<div class="p-card__actions">' +
          (out
            ? '<button class="btn btn--ghost btn--sm" disabled>Out of stock</button>'
            : '<button class="btn btn--primary btn--sm" data-add="' + esc(p.id) + '">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>' +
                'Add to Cart' +
              '</button>') +
        '</div>' +
      '</div>' +
    '</article>';
  }

  /* ---------- Add-to-cart click handler ---------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add]');
    if (btn) {
      e.preventDefault();
      btn.disabled = true;
      Cart.add(btn.getAttribute('data-add'), 1);
      setTimeout(function () { btn.disabled = false; }, 400);
    }
  });

  /* ---------- Chrome ---------- */
  function initChrome() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    var t = document.getElementById('navToggle');
    var n = document.getElementById('nav');
    if (t && n) {
      t.addEventListener('click', function () {
        var o = n.classList.toggle('open');
        t.classList.toggle('open', o);
        t.setAttribute('aria-expanded', String(o));
      });
      n.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          n.classList.remove('open');
          t.classList.remove('open');
          t.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var h = document.getElementById('header');
    var b = document.getElementById('backToTop');
    function onS() {
      var sy = window.scrollY;
      if (h) h.classList.toggle('scrolled', sy > 12);
      if (b) b.classList.toggle('show', sy > 500);
    }
    window.addEventListener('scroll', onS, { passive: true });
    onS();
    if (b) b.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-open-cart]')) {
        e.preventDefault();
        Drawer.open();
      }
    });

    Cart.renderBadge();
  }

  /* ---------- Shop page ---------- */
  function initShopPage() {
    var grid = document.getElementById('shopGrid');
    if (!grid) return;
    var search = document.getElementById('filterSearch');
    var cat = document.getElementById('filterCategory');
    var sort = document.getElementById('filterSort');
    var count = document.getElementById('resultCount');

    var params = new URLSearchParams(location.search);
    if (params.get('cat') && cat) cat.value = params.get('cat');
    if (params.get('q') && search) search.value = params.get('q');

    /* Featured products sort to the top by default */
    function render() {
      var q = (search && search.value || '').trim().toLowerCase();
      var c = cat ? cat.value : 'all';
      var s = sort ? sort.value : 'relevance';
      var list = PRODUCTS.filter(function (p) {
        if (c !== 'all' && p.category !== c) return false;
        if (q && (p.name + ' ' + (p.brand || '') + ' ' + (p.short || '')).toLowerCase().indexOf(q) === -1) return false;
        return true;
      });
      if (s === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
      else if (s === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
      else if (s === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      else list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });

      if (count) count.textContent = list.length + ' product' + (list.length === 1 ? '' : 's');
      grid.innerHTML = list.length
        ? list.map(productCard).join('')
        : '<div style="grid-column:1/-1;text-align:center;padding:56px 20px;color:var(--muted);">' +
            '<h3 style="color:var(--navy-800);">No products found</h3>' +
            '<p>Try a different search or filter.</p>' +
          '</div>';
    }

    [search, cat, sort].forEach(function (el) {
      if (el) el.addEventListener('input', render);
      if (el) el.addEventListener('change', render);
    });
    render();
  }

  /* ---------- Checkout page ---------- */
  function initCheckoutPage() {
    var root = document.getElementById('checkoutRoot');
    if (!root) return;
    var t = Cart.totals();
    if (!t.lines.length) {
      root.innerHTML =
        '<div style="text-align:center;padding:56px 20px;">' +
          '<h2>Your cart is empty</h2>' +
          '<p><a href="shop.html" class="btn btn--primary">Back to Shop</a></p>' +
        '</div>';
      return;
    }

    root.innerHTML =
      '<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:24px;align-items:start;">' +
        '<form id="checkoutForm" novalidate>' +
          '<div class="field field--full"><label>Full Name *</label><input type="text" name="fullName" required><span class="field__err">Please enter your name.</span></div>' +
          '<div class="field field--full"><label>Phone *</label><input type="tel" name="phone" required placeholder="98XXXXXXXX"><span class="field__err">Please enter a phone number.</span></div>' +
          '<div class="field field--full"><label>Email</label><input type="email" name="email"></div>' +
          '<div class="field field--full"><label>Province *</label>' +
            '<select name="province" required>' +
              '<option value="">Select province…</option>' +
              '<option>Koshi</option><option>Madhesh</option><option>Bagmati</option>' +
              '<option>Gandaki</option><option>Lumbini</option><option>Karnali</option><option>Sudurpashchim</option>' +
            '</select><span class="field__err">Please select a province.</span></div>' +
          '<div class="field field--full"><label>District / City *</label><input type="text" name="district" required><span class="field__err">Please enter your district.</span></div>' +
          '<div class="field field--full"><label>Full Address *</label><textarea name="address" required></textarea><span class="field__err">Please enter your address.</span></div>' +
          '<div class="field field--full"><label>Payment Method *</label>' +
            '<select name="payment" required>' +
              '<option value="esewa">eSewa</option>' +
              '<option value="khalti">Khalti</option>' +
              '<option value="fonepay">Fonepay QR</option>' +
              '<option value="imepay">IME Pay</option>' +
              '<option value="bank">Bank Transfer</option>' +
              '<option value="cod">Cash on Delivery</option>' +
            '</select></div>' +
          '<div class="field field--full"><label>Notes (optional)</label><textarea name="notes"></textarea></div>' +
          '<button type="submit" class="btn btn--primary btn--block" style="margin-top:12px;">Place Order &mdash; ' + money(t.total) + '</button>' +
        '</form>' +
        '<aside style="background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);padding:20px;box-shadow:var(--shadow-sm);">' +
          '<h3>Order Summary</h3>' +
          t.lines.map(function (l) {
            return '<div style="display:flex;justify-content:space-between;padding:5px 0;font-size:.84rem;"><span>' + esc(l.name) + ' x ' + l.qty + '</span><strong>' + money(l.lineTotal) + '</strong></div>';
          }).join('') +
          '<div style="display:flex;justify-content:space-between;padding:10px 0 0;border-top:1px dashed var(--line);margin-top:8px;font-size:.84rem;"><span>Subtotal</span><strong>' + money(t.subtotal) + '</strong></div>' +
          '<div style="display:flex;justify-content:space-between;padding:5px 0;font-size:.84rem;"><span>VAT (13%)</span><strong>' + money(t.vat) + '</strong></div>' +
          '<div style="display:flex;justify-content:space-between;padding:10px 0 0;border-top:2px solid var(--line);margin-top:8px;font-size:1rem;"><span style="color:var(--navy-800);font-weight:800;">Total</span><strong>' + money(t.total) + '</strong></div>' +
          '<p style="font-size:.72rem;color:var(--muted);margin-top:12px;">Delivery billed at actual courier rate. We confirm before dispatch.</p>' +
        '</aside>' +
      '</div>';

    var form = document.getElementById('checkoutForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = ['fullName', 'phone', 'province', 'district', 'address'];
      var ok = true;
      required.forEach(function (name) {
        var el = form.elements[name];
        var good = el.value.trim().length >= 2 || (name === 'province' && el.value);
        var wrap = el.closest('.field');
        if (wrap) wrap.classList.toggle('error', !good);
        if (!good) ok = false;
      });
      if (!ok) return;

      var fd = new FormData(form);
      var lines = t.lines.map(function (l) { return '- ' + l.name + ' x ' + l.qty + ' - Rs. ' + l.lineTotal; }).join('%0A');
      var text =
        '*New Order*%0A--------------------------%0A' +
        '*Name:* ' + encodeURIComponent(fd.get('fullName')) + '%0A' +
        '*Phone:* ' + encodeURIComponent(fd.get('phone')) + '%0A' +
        (fd.get('email') ? '*Email:* ' + encodeURIComponent(fd.get('email')) + '%0A' : '') +
        '*Province:* ' + encodeURIComponent(fd.get('province')) + '%0A' +
        '*District:* ' + encodeURIComponent(fd.get('district')) + '%0A' +
        '*Address:* ' + encodeURIComponent(fd.get('address')) + '%0A' +
        '--------------------------%0A' +
        '*Items:*%0A' + lines + '%0A' +
        '--------------------------%0A' +
        'Subtotal: Rs. ' + t.subtotal + '%0A' +
        'VAT (13%): Rs. ' + t.vat + '%0A' +
        '*Total (excl. delivery): Rs. ' + t.total + '*%0A' +
        'Payment: ' + encodeURIComponent(fd.get('payment')) + '%0A' +
        (fd.get('notes') ? 'Notes: ' + encodeURIComponent(fd.get('notes')) : '');

      window.open('https://wa.me/' + WHATSAPP + '?text=' + text, '_blank');
      Cart.clear();
      root.innerHTML =
        '<div style="text-align:center;padding:48px 20px;">' +
          '<div style="width:64px;height:64px;border-radius:50%;margin:0 auto 16px;display:grid;place-items:center;background:rgba(18,183,106,.12);color:var(--ok);">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="width:30px;height:30px;"><path d="M20 6 9 17l-5-5"/></svg>' +
          '</div>' +
          '<h1>Order Placed</h1>' +
          '<p>Your order has been sent to us on WhatsApp. We\'ll confirm shortly.</p>' +
          '<a href="shop.html" class="btn btn--primary">Continue Shopping</a>' +
        '</div>';
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js-anim');
    initChrome();
    initShopPage();
    initCheckoutPage();
  });

})();